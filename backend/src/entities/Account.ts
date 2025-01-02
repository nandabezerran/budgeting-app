import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import "reflect-metadata";
import { Expense } from "./Expense";
import { Income } from "./Income";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column("enum")
    type!: string;

    @OneToMany(() => Expense, (expense) => expense.account, { cascade: true })
    expenses!: Expense[];

    @OneToMany(() => Income, (income) => income.account, { cascade: true })
    incomes!: Income[];
}