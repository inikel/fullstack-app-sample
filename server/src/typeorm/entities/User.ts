import { Field, ObjectType } from "type-graphql";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class User {
    @Field(() => Number)
    @PrimaryGeneratedColumn()
    id: number

    @Field(() => String)
    @Column({ nullable: true })
    username?: string

    @Field(() => String)
    @Column({ unique: true })
    email: string

    @Field(() => String)
    @Column({ unique: true })
    password: string

    @Field(() => Date)
    @CreateDateColumn()
    createdDate: Date

    
    @Field(() => Date)
    @UpdateDateColumn()
    updatedDate: Date
}