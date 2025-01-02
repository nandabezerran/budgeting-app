import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import "reflect-metadata";
import { Account } from "./Account";

@Entity()
export class Income {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("decimal", { precision: 10, scale: 2 })
    value!: number;

    @Column({ type: "timestamp" })
    date!: Date;

    @Column({ type: "varchar", length: 255, nullable: true })
    description!: string;

    @ManyToOne(() => Account)
    account!: Account;

}