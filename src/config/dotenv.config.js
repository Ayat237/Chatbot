import { config } from 'dotenv';

/**
 * Configures the environment variables from the specified .env file.
 *
 * @param {string} [envFilePath='.env'] - The path to the .env file.
 */
export const configureEnvironment = (envFilePath = '.env') => {
    config({ path: envFilePath });
};

// Automatically configure environment variables
configureEnvironment();
