import type { Context, Config } from "@netlify/functions";
import serverless from "serverless-http";

export default async (req: Request, context: Context) => {
  if (typeof Netlify !== "undefined" && Netlify.env) {
    const env = Netlify.env;
    if (!process.env.OPENAI_API_KEY && env.OPENAI_API_KEY) {
      process.env.OPENAI_API_KEY = env.OPENAI_API_KEY;
    }
    if (!process.env.DB_URI && env.DB_URI) {
      process.env.DB_URI = env.DB_URI;
    }
    if (!process.env.PORT && env.PORT) {
      process.env.PORT = env.PORT;
    }
  }

  process.env.NETLIFY = process.env.NETLIFY || "true";

  const { createApp } = await import("../../index.js");
  const app = createApp();
  const handler = serverless(app);

  const url = new URL(req.url);
  const headers = Object.fromEntries(req.headers.entries());
  const queryStringParameters: Record<string, string> = {};
  for (const [key, value] of url.searchParams.entries()) {
    queryStringParameters[key] = value;
  }

  const body = ["GET", "HEAD"].includes(req.method)
    ? undefined
    : await req.text();

  const basePath = "/.netlify/functions/api";
  const requestPath = url.pathname.startsWith(basePath)
    ? url.pathname.slice(basePath.length) || "/"
    : url.pathname;

  const result = await handler(
    {
      httpMethod: req.method,
      path: requestPath,
      headers,
      queryStringParameters,
      body,
      isBase64Encoded: false,
    },
    context as unknown as Record<string, unknown>
  );

  const responseBody = result.isBase64Encoded
    ? Buffer.from(result.body || "", "base64")
    : result.body;

  return new Response(responseBody, {
    status: result.statusCode || 200,
    headers: result.headers,
  });
};

export const config: Config = {
  path: "/*",
};
