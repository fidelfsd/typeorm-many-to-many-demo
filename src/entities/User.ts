import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   JoinTable,
   ManyToMany,
} from "typeorm";
import { Task } from "./Task";

// -----------------------------------------------------------------------------

@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id!: number;

   @Column()
   name!: string;

   @ManyToMany(() => Task)
   @JoinTable({
      name: "tasks_users",
      joinColumn: {
         name: "user_id",
         referencedColumnName: "id",
      },
      inverseJoinColumn: {
         name: "task_id",
         referencedColumnName: "id",
      },
   })
   tasks?: Task[];
}
