import { Column, Entity, PrimaryColumn } from 'typeorm';
export enum Activity {
    'Актив' = 'Актив',
    'Пассив' = 'Пассив',
    'Актив-Пассив' = 'Актив-Пассив',
}

@Entity()
export class AccountCode {
    @PrimaryColumn()
    code: number;
    @Column()
    name: string;
}