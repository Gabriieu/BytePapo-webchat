import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAdminField1701792762186 implements MigrationInterface {
    name = 'AddAdminField1701792762186'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "admin" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "admin"`);
    }

}
