import fs from "fs";
import path from "path";

import { createConnection } from "typeorm";

const tmpTestFolder = path.join(__dirname, "..", "..", "..", "tmp-test");
const stockImagePath = path.resolve(__dirname, "stock-image.jpg");
const stockImage2Path = path.resolve(__dirname, "stock-image2.jpg");

const setupEnvironment = async () => {
  const connection = await createConnection();
  await connection.runMigrations();

  const entities = connection.entityMetadatas;

  for (const entity of entities) {
    const repository = connection.getRepository(entity.name);
    await repository.query(`DELETE FROM ${entity.tableName};`);
  }
};

const clearFiles = () => {
  fs.rmdirSync(tmpTestFolder, { recursive: true });
};

const getFilesNumberOnTmpFolder = () => {
  const files = fs.readdirSync(tmpTestFolder);
  return files.length;
};

export {
  stockImagePath,
  stockImage2Path,
  setupEnvironment,
  clearFiles,
  getFilesNumberOnTmpFolder,
};
