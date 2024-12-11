import { ConnectionOptions } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

const config: ConnectionOptions = {
    type: "postgres", // database type (e.g., mysql, postgres)
    host: process.env.DB_HOST,
    port: 5432, // port for the database
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true, // if true, automatic schema synchronization will be enabled
    logging: false,
    entities: ["src/entity/*.ts"], // path to your entities (typescript files)
};

export = config;