import { MigrationInterface, QueryRunner } from "typeorm";

export class UserTable1732739343120 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "user" (
                id UUID NOT NULL DEFAULT uuid_generate_v4(),
                name VARCHAR(256) NOT NULL,
                email VARCHAR(256) NOT NULL,
                password VARCHAR(256) NOT NULL,
                CONSTRAINT user_pk_id PRIMARY KEY (id),
                CONSTRAINT user_un_email UNIQUE (email)
            );`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "user";`);
    }
}
