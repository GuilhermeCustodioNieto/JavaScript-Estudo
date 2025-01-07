import { Topic } from "src/topic/entities/topic.entity";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column()
    profileImage: string;

    @Column()
    password: string;

    @OneToMany(() => Topic, (topic) => topic.userId)
    topics: Topic[];




}
