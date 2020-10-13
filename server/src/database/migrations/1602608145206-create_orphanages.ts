import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602608145206 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "orphanages",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },

          {
            name: "name",
            type: "varchar",
          },

          {
            name: "latitude",
            type: "decimal",
            precision: 12,
            scale: 10,
          },

          {
            name: "longitude",
            type: "decimal",
            precision: 12,
            scale: 10,
          },

          {
            name: "about",
            type: "text",
          },

          {
            name: "instructions",
            type: "text",
          },

          {
            name: "opening_hours",
            type: "varchar",
          },

          {
            name: "open_on_weekends",
            type: "boolean",
            default: false,
          },

          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },

          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("orphanages");
  }
}
