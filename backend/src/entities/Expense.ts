import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import "reflect-metadata";
import { Account } from "./Account";

@Entity()
export class Expense {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: number;

    @Column()
    date: Date;

    @Column()
    description: string | null;

    @Column()
    budgetType: string;

    @OneToOne(() => Account)
    @Column()
    account: Account;

}