import MongooseDatabase from "./mongoDatabase.js";


const database = new MongooseDatabase(process.env.DB_URI);

database.connect();

export {database};
