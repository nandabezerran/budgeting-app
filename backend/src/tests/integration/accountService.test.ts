import request from 'supertest';
import app from '../../../index'; // Import the Express app
import { Account } from '../../../src/entities/Account'; // Import your Account entity
import { AccountType } from '../../enums/AccountType';
import AppDataSource from '../../../typeorm.config'; // Import your TypeORM DataSource


jest.mock('../../entities/Account');

describe('POST /api/acount', () => {
    const accountData = {
        name: 'Savings Fernanda',
        type: AccountType.SAVINGS,
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should save an expense and return a success response', async () => {
        // Mock the save function
        (Account.prototype.save as jest.Mock).mockResolvedValue({
            id: 1,
            ...accountData,
        });
        const response = await request(app).post('/api/account').send(accountData);

        expect(response.status).toBe(201); // Should be 201 as it's mocked
        expect(response.body).toHaveProperty('id');
    });

    it('should return a 400 error if required fields are missing', async () => {
        const accountDataMissingFields = {
            name: 'Savings Fernanda',

        };

        const response = await request(app).post('/api/account').send(accountDataMissingFields);

        expect(response.status).toBe(400); // Should be 400 if fields are missing
        expect(response.body.error).toBe('Validation error: Missing required fields');
    });
});
