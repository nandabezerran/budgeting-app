import { saveExpense } from '../../services/expenseService';
import { Expense } from '../../entities/Expense';

jest.mock('../../entities/Expense');

describe('saveExpense', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should save an expense successfully', async () => {
        const expenseData = {
            value: 100.5,
            date: new Date(),
            description: 'Groceries',
            accountId: 1,
        };

        // Mock the save function
        (Expense.prototype.save as jest.Mock).mockResolvedValue({
            id: 1,
            ...expenseData,
        });

        const result = await saveExpense(expenseData);

        expect(result).toHaveProperty('id', 1);
        expect(result.value).toBe(100.5);
        expect(Expense.prototype.save).toHaveBeenCalledTimes(1);
    });

    it('should throw an error if required fields are missing', async () => {
        const expenseData = {
            value: null,
            date: new Date(),
            description: 'Groceries',
            accountId: 1,
        };

        await expect(saveExpense(expenseData)).rejects.toThrow('Validation error');
    });
});
