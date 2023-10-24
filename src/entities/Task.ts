import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { User } from "./User";

// -----------------------------------------------------------------------------

@Entity()
export class Task {
   @PrimaryGeneratedColumn()
   id!: number;

   @Column()
   title!: string;

   @ManyToMany(() => User, (user) => user.tasks)
   assignee?: User[];
}
