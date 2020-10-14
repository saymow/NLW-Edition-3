import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class FIXLongitudeAndLatitudeissue1602699350927
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "orphanages",
      "latitude",
      new TableColumn({
        name: "latitude",
        type: "decimal",
        precision: 9,
        scale: 7,
      })
    );

    await queryRunner.changeColumn(
      "orphanages",
      "longitude",
      new TableColumn({
        name: "longitude",
        type: "decimal",
        precision: 9,
        scale: 7,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
