import express from 'express';
import cors from 'cors';
import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";
import itemsRoute from './src/routes/items';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Set up the PostgreSQL connection pool
const pool = new Pool({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Test database connection
pool.connect((err, client, release) => {
    if (err) {
        return console.error("Error acquiring client", err.stack);
    }
    console.log("PostgreSQL connected!");
    release();
});


app.use(cors());
app.use(express.json());
app.use('/api', itemsRoute);

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});