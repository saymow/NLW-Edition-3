import { Router } from "express";
import uploadConfig from "../config/upload";

import OrphanageController from "../controllers/OrphanageController";

const routes = Router();

routes.post(
  "/",
  uploadConfig.multer.array("images"),
  OrphanageController.create
);

routes.get("/", OrphanageController.index);

routes.get("/:id", OrphanageController.show);

export default routes;
