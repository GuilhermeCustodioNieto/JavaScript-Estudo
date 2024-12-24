/* eslint-disable prettier/prettier */
import {
    Column, PrimaryGeneratedColumn
    , Entity
} from "typeorm";

@Entity('developers')
export class Developer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    dateOfBirth: string;

}
