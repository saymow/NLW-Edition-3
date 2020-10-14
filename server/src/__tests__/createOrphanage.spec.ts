import request from "supertest";

import app from "../app";

import {
  stockImagePath,
  stockImage2Path,
  setupEnvironment,
  clearFiles,
  getFilesNumberOnTmpFolder,
} from "./fixtures/db";

beforeAll(async () => await setupEnvironment());

afterAll(clearFiles);

describe("Orphanage creation", () => {
  it("Should create a valid orphanage", async (done) => {
    const response = await request(app)
      .post("/orphanages")
      .field("name", "Ong's name")
      .field("latitude", -19.9670625)
      .field("longitude", -44.0294353)
      .field("about", "Ong's about")
      .field("instructions", "Ong's instructions")
      .field("opening_hours", "Open at 17:00 ends 20:00")
      .field("open_on_weekends", true)
      .attach("images", stockImagePath)
      .attach("images", stockImage2Path)
      .expect(201);

    const bodyKeys = Object.keys(response.body);

    const qtyOfImagesUploaded = getFilesNumberOnTmpFolder();

    expect(qtyOfImagesUploaded).toBe(2);

    expect(bodyKeys).toEqual([
      "id",
      "name",
      "latitude",
      "longitude",
      "about",
      "instructions",
      "opening_hours",
      "open_on_weekends",
      "created_at",
      "updated_at",
      "images",
    ]);

    done();
  });

  it("Should not create an invalid orphanage", async (done) => {
    const response = await request(app)
      .post("/orphanages")
      .field("name", "Ong's name")
      .field("latitude", -19.9670625)
      .field("longitude", -44.0294353)
      // .field("about", "Ong's about")
      .field("instructions", "Ong's instructions")
      .field("opening_hours", "Open at 17:00 ends 20:00")
      .field("open_on_weekends", true)
      .attach("images", stockImagePath)
      .attach("images", stockImage2Path)
      .expect(400);

    const bodyKeys = Object.keys(response.body);

    expect(bodyKeys).toEqual(["message", "errors"]);

    done();
  });
});
