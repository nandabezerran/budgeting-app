import express from 'express';
import { saveExpense } from '../services/expenseService';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const expense = await saveExpense(req.body);
        res.status(201).json(expense);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }

    }
});

export default router;