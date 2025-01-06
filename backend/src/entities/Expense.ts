import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { Account } from "./Account";
import { BudgetType } from "../enums/BudgetType";

@Entity()
export class Expense extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("decimal", { precision: 10, scale: 2 })
    value!: number;

    @Column({ type: "timestamp" })
    date!: Date;

    @Column({ type: "varchar", length: 255, nullable: true })
    description!: string;

    @Column({
        type: 'enum', // Specify the column type as enum
        enum: BudgetType, // Reference the enum
        default: BudgetType.NEEDS, // Optional: Set a default value
    })
    budgetType!: string;

    @ManyToOne(() => Account, (account) => account.expenses, { nullable: false })
    account!: Account;

}