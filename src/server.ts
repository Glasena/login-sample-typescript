import { DataSource } from 'typeorm';
import { Users } from './database/entities/Users';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'admin',
  synchronize: true,
  logging: true,
  entities: ['src/entities/*.ts'],
  subscribers: [],
  migrations: ['migrations/*.ts']
});
