import { MigrationInterface, QueryRunner } from "typeorm";

export class UserTask1698160274987 implements MigrationInterface {
    name = 'UserTask1698160274987'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`task\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tasks_users\` (\`user_id\` int NOT NULL, \`task_id\` int NOT NULL, INDEX \`IDX_81380afceb956e4da0af28bcc2\` (\`user_id\`), INDEX \`IDX_d4e7f63e32fefcfe5d9b072d1d\` (\`task_id\`), PRIMARY KEY (\`user_id\`, \`task_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tasks_users\` ADD CONSTRAINT \`FK_81380afceb956e4da0af28bcc20\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`tasks_users\` ADD CONSTRAINT \`FK_d4e7f63e32fefcfe5d9b072d1d6\` FOREIGN KEY (\`task_id\`) REFERENCES \`task\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tasks_users\` DROP FOREIGN KEY \`FK_d4e7f63e32fefcfe5d9b072d1d6\``);
        await queryRunner.query(`ALTER TABLE \`tasks_users\` DROP FOREIGN KEY \`FK_81380afceb956e4da0af28bcc20\``);
        await queryRunner.query(`DROP INDEX \`IDX_d4e7f63e32fefcfe5d9b072d1d\` ON \`tasks_users\``);
        await queryRunner.query(`DROP INDEX \`IDX_81380afceb956e4da0af28bcc2\` ON \`tasks_users\``);
        await queryRunner.query(`DROP TABLE \`tasks_users\``);
        await queryRunner.query(`DROP TABLE \`task\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
