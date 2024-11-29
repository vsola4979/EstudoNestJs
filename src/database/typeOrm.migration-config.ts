import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as entities from './entities';

const ENV = process.env.NODE_ENV || 'development';

config({ path: `config/env/${ENV}.env` });

const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
};

export default new DataSource(dataSourceOptions);