import { Account } from '../entities/Account'; // Assuming you have an Expense model
import { AccountType } from '../enums/AccountType';

export async function saveAccount(data: {
    name: string | null;
    type: string; // Make it only accept the enum
}) {
    if (!data.name || !data.type) {
        throw new Error('Validation error: Missing required fields');
    }

    const account = new Account();
    account.name = data.name;
    account.type = AccountType[data.type as keyof typeof AccountType]; // Convert string to enum value

    return await account.save(); // Assuming TypeORM for ORM
}