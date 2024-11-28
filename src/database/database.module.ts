import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost', // Altere para o host do seu banco de dados
            port: 5432, // Porta padrão do PostgreSQL
            username: 'postgres', // Usuário do banco de dados
            password: '12345678', // Senha do banco de dados
            database: '12345678', // Nome do banco de dados
            entities: [__dirname + '/entities/**/*.entity{.ts,.js}'], // Caminho para as entidades
            migrations: [__dirname + '/migrations/**/*{.ts,.js}'], // Caminho para as migrações
            synchronize: true, // Apenas para desenvolvimento; remove em produção
        }),
    ],
})
export class DatabaseModule {

}
