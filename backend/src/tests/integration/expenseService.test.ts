import request from 'supertest';
import app from '../../../index'; // Import the Express app
import { Expense } from '../../../src/entities/Expense'; // Import your Expense entity

jest.useFakeTimers();
jest.mock('../../entities/Expense');

describe('POST /api/expense', () => {
    const expenseData = {
        value: 100.5,
        date: '2025-01-10',
        description: 'Groceries',
        accountId: 1,
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should save an expense and return a success response', async () => {
        // Mock the save function
        (Expense.prototype.save as jest.Mock).mockResolvedValue({
            id: 1,
            ...expenseData,
        });
        const response = await request(app).post('/api/expense').send(expenseData);

        expect(response.status).toBe(201); // Should be 201 as it's mocked
        expect(response.body).toHaveProperty('id');
    });

    it('should return a 400 error if required fields are missing', async () => {
        const expenseDataMissingFields = {
            date: '2025-01-10',
            description: 'Groceries',
        };

        const response = await request(app).post('/api/expense').send(expenseDataMissingFields);

        expect(response.status).toBe(400); // Should be 400 if fields are missing
        expect(response.body.error).toBe('Validation error: Missing required fields');
    });
});
