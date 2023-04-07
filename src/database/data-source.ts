import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Users } from './entities/Users';

const entities = [Users];

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'login-sample',
  synchronize: true,
  logging: true,
  entities: entities,
  subscribers: [],
  migrations: ['./src/database/migrations/*.ts']
});
