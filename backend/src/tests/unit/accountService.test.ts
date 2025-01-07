import { saveAccount } from '../../services/accountService';
import { Account } from '../../entities/Account';
import { AccountType } from '../../enums/AccountType';

jest.mock('../../entities/Account');

describe('saveExpense', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should save an expense successfully', async () => {
        const accountData = {
            name: 'Savings Fernanda',
            type: AccountType.SAVINGS
        };

        // Mock the save function
        (Account.prototype.save as jest.Mock).mockResolvedValue({
            id: 1,
            ...accountData,
        });

        const result = await saveAccount(accountData);

        expect(result).toHaveProperty('id', 1);
        expect(result.name).toBe('Savings Fernanda');
        expect(Account.prototype.save).toHaveBeenCalledTimes(1);
    });

    it('should throw an error if required fields are missing', async () => {
        const accountData = {
            name: null,
            type: AccountType.SAVINGS
        };

        await expect(saveAccount(accountData)).rejects.toThrow('Validation error');
    });
});
