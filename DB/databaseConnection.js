import MongoDatabase from "./mongoDatabase.js";

const database = new MongoDatabase(process.env.DB_URI);

database.connect();

export default database;
