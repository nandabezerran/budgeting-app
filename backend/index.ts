import express from 'express';
import cors from 'cors';
import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";
import itemsRoute from './src/routes/items';
import expenseRoute from './src/routes/expense'
import "reflect-metadata"
import AppDataSource from './typeorm.config';

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

// Initialize the DataSource
AppDataSource.initialize()
    .then(() => {
        console.log('DataSource has been initialized!');
        // Start the server only after the DataSource is ready
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    })
    .catch((err) => {
        console.error('Error during DataSource initialization:', err);
    });


// Test database connection (only run in non-test environments)
if (process.env.NODE_ENV !== 'test') {
    pool.connect((err, client, release) => {
        if (err) {
            return console.error("Error acquiring client", err.stack);
        }
        release();
    });
}

app.use(cors());
app.use(express.json());

app.use('/api/items', itemsRoute);
app.use('/api/expense', expenseRoute);
console.log('Expense route registered at /api/expense');

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(PORT, () => {
    // console.log(`Server is running on port ${PORT}`);
});

export default app;