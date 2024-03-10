import { Column, Entity, PrimaryColumn, Unique } from "typeorm";
import { City, FamilyState, Citizenship, Disability } from "./type.entity";

@Entity()
@Unique('Ваня', ['passportSeries', 'passportNumber'])
export class User {
    @PrimaryColumn({generated: "increment"})
    id: number;
    @Column({nullable: false})
    surname: string;
    @Column({nullable: false})
    name: string;
    @Column({nullable: false})
    fatherName: string;
    @Column({nullable: false})
    birthDate: Date;
    @Column({nullable: false})
    sex: boolean;
    @Column({nullable: false})
    passportSeries: string;
    @Column({nullable: false})
    passportNumber: string;
    @Column({nullable: false})
    passportAuthority: string;
    @Column({nullable: false})
    passportDate: Date;
    @Column({unique: true, nullable: false})
    idNumber: string;
    @Column({nullable: false})
    birthPlace: string;
    @Column({nullable: false})
    cityResidence: City;
    @Column({nullable: false})
    addressResidence: string;
    @Column({nullable: true})
    homePhone: string;
    @Column({nullable: true})
    mobilePhone: string;
    @Column({nullable: true})
    email: string;
    @Column({nullable: true})
    workPlace: string;
    @Column({nullable: true})
    position: string;
    @Column({nullable: false})
    cityRegistration: City;
    @Column({nullable: false})
    addressRegistration: string;
    @Column({nullable: false})
    familyState: FamilyState;
    @Column({nullable: false})
    citizenship: Citizenship;
    @Column({nullable: false})
    disability: Disability;
    @Column({nullable: false})
    retirement: boolean;
    @Column({nullable: true})
    salary: number;
    @Column({nullable: false})
    army: boolean;
}
