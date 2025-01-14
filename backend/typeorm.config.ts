import "reflect-metadata"
import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "postgres", // database type (e.g., mysql, postgres)
    host: 'localhost',
    port: 5432, // port for the database
    username: 'postgres',
    password: 'admin',
    database: 'budgeting-app',
    synchronize: true, // if true, automatic schema synchronization will be enabled
    logging: false,
    entities: ["src/entities/*.{ts,js}"],  // path to your entities (typescript files)
    migrations: [
        "src/migrations/**/*.{ts,js}"
    ],
});


AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))

export default AppDataSource;