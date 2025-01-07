import { Study } from "src/study/entities/study.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Topic {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date


    @OneToMany(() => Study, (study) => study.topicId)
    studies: Study[];

    @ManyToOne(() => User, (user) => user.topics)
    @JoinColumn({ name: 'userId' })
    userId: User;

}
