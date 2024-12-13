import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateExpenseTable1734109421038 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "expense",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "value",
                        type: "decimal",
                        precision: 10,
                        scale: 2,
                        isNullable: false,
                    },
                    {
                        name: "date",
                        type: "timestamp",
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "255",
                        isNullable: true,
                    },
                    {
                        name: "budgetType",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "accountId",
                        type: "int",
                        isNullable: false,
                    },
                ],
            })
        );

        await queryRunner.createForeignKey(
            "expense",
            new TableForeignKey({
                columnNames: ["accountId"],
                referencedTableName: "account",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("expense", "FK_account_expense");
        await queryRunner.dropTable("expense");
    }

}
