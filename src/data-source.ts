import { DataSource } from "typeorm";
import "reflect-metadata";

// -----------------------------------------------------------------------------

export const AppDataSource = new DataSource({
   type: "mysql",
   host: "localhost",
   port: 3306,
   username: "root",
   password: "root",
   database: "typeorm_many_to_many_demo",
   entities: ["./src/entities/*.ts"],
   migrations: ["./src/migrations/*.ts"],
});
