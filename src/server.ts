import { DataSource } from "typeorm";
import { User } from "./database/entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})