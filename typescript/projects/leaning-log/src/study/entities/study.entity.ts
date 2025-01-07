import { Topic } from "src/topic/entities/topic.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Study {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => Topic, (topic) => topic.studies)
    @JoinColumn({ name: 'topicId' })
    topicId: Topic
}
