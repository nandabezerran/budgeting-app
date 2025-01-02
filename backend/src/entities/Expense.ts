import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { Account } from "./Account";

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

    @Column("enum")
    budgetType!: string;

    @ManyToOne(() => Account)
    account!: Account;

}