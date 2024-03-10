import { Column, Entity } from "typeorm";
import { Currency, DepositType } from "./type.entity";

@Entity()
export class Contract {
    @Column()
    depositType: DepositType;
    @Column({type: "bigint"})
    contractNumber: number;
    @Column()
    currency: Currency;
    @Column()
    beginDate: Date;
    @Column()
    endDate: Date;
    @Column()
    term: number;
    @Column({type: "bigint"})
    amount: number;
    @Column()
    percent: number;
}
