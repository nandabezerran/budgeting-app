import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import "reflect-metadata";
import { Account } from "./Account";

@Entity()
export class Expense {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("decimal", { precision: 10, scale: 2 })
    value: number;

    @Column()
    date: Date;

    @Column({ nullable: true })
    description: string;

    @Column()
    budgetType: string;

    @ManyToOne(() => Account)
    @Column()
    account: Account;

}