import { Expense } from '../entities/Expense'; // Assuming you have an Expense model

export async function saveExpense(data: {
    value: number;
    date: Date;
    description?: string;
    accountId: number;
}) {
    if (!data.value || !data.date || !data.accountId) {
        throw new Error('Validation error: Missing required fields');
    }

    const expense = new Expense();
    Object.assign(expense, data);

    return await expense.save(); // Assuming TypeORM for ORM
}