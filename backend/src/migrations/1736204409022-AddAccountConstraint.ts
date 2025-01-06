import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAccountConstraint1736204409022 implements MigrationInterface {
    name = 'AddAccountConstraint1736204409022'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expense" DROP CONSTRAINT "FK_015435528d9ddf9dd6ee01f172d"`);
        await queryRunner.query(`ALTER TABLE "expense" ALTER COLUMN "accountId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "expense" ADD CONSTRAINT "FK_015435528d9ddf9dd6ee01f172d" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expense" DROP CONSTRAINT "FK_015435528d9ddf9dd6ee01f172d"`);
        await queryRunner.query(`ALTER TABLE "expense" ALTER COLUMN "accountId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "expense" ADD CONSTRAINT "FK_015435528d9ddf9dd6ee01f172d" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
