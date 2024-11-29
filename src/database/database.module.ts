import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';

import * as entities from './entities';

const ENV = process.env.NODE_ENV || 'development';

config({ path: `config/env/${ENV}.env` });

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: +process.env.DB_PORT, // Porta padrão do PostgreSQL
            username: process.env.DB_USERNAME, // Usuário do banco de dados
            password: process.env.DB_PASSWORD, // Senha do banco de dados
            database: process.env.DB_NAME, // Nome do banco de dados
            entities, // Caminho para as entidades
            migrations: [__dirname + '/migrations/**/*{.ts,.js}'], // Caminho para as migrações            
        }),
    ],
})
export class DatabaseModule { }

