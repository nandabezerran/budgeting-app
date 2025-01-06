import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import "reflect-metadata";
import { Expense } from "./Expense";
import { Income } from "./Income";
import { AccountType } from "../enums/AccountType";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column({
        type: 'enum', // Specify the column type as enum
        enum: AccountType, // Reference the enum
        default: AccountType.SAVINGS, // Optional: Set a default value
    })
    type!: string;

    @OneToMany(() => Expense, (expense) => expense.account, { cascade: true })
    expenses!: Expense[];

    @OneToMany(() => Income, (income) => income.account, { cascade: true })
    incomes!: Income[];
}