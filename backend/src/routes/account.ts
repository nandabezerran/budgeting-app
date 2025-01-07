import express from 'express';
import { saveAccount } from '../services/accountService';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const account = await saveAccount(req.body);
        res.status(201).json(account);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }

    }
});

export default router;