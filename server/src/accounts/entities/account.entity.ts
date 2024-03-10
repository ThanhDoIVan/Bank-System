import { Column, Entity, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";
import { AccountCode, Activity } from "./type.entity";

@Entity()
export class Account {
    @PrimaryColumn()
    id: number;
    @Column({type: "bigint"})
    accountNumber: number;
    @ManyToOne( () => AccountCode, (account) => account.code)
    accountCode: AccountCode;
    @Column()
    accountActivity: Activity;
    @Column({type: "bigint"})
    debit: number;
    @Column({type: "bigint"})
    credit: number;
    @Column({type: "bigint"})
    saldo: number;
    @OneToOne(() => User, (user) => user.id)
    user: User;
}

