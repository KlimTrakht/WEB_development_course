import {MigrationInterface, QueryRunner} from "typeorm";

export class usersUniqUserName1639597675827 implements MigrationInterface {
    name = 'usersUniqUserName1639597675827'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD UNIQUE INDEX \`IDX_226bb9aa7aa8a69991209d58f5\` (\`userName\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP INDEX \`IDX_226bb9aa7aa8a69991209d58f5\``);
    }

}
