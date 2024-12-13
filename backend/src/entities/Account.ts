import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import "reflect-metadata";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @OneToMany(() => Expense, (expense) => expense.account, { cascade: true })
    expenses: Expense[];

    @OneToMany(() => Income, (income) => income.account, { cascade: true })
    incomes: Income[];
}