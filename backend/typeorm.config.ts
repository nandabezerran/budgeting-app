import "reflect-metadata";
import { DataSource } from "typeorm";

const isTestEnv = process.env.NODE_ENV === "test";

const AppDataSource = new DataSource({
    type: isTestEnv ? "sqlite" : "postgres",
    host: isTestEnv ? undefined : process.env.DATABASE_HOST || "localhost",
    port: isTestEnv ? undefined : parseInt(process.env.DATABASE_PORT || "5432"),
    username: isTestEnv ? undefined : process.env.DATABASE_USER || "postgres",
    password: isTestEnv ? undefined : process.env.DATABASE_PASSWORD || "admin",
    database: isTestEnv ? ":memory:" : process.env.DATABASE_NAME || "budgeting-app",
    synchronize: isTestEnv || true, // Automatically sync schema in test mode
    logging: false,
    entities: ["src/entities/*.{ts,js}"],
    migrations: ["src/migrations/**/*.{ts,js}"],
});

AppDataSource.initialize()
    .then(() => {
        if (!isTestEnv) {
            console.log("Database connection established");
        }
    })
    .catch((error) => console.error("Database connection error:", error));

export default AppDataSource;
