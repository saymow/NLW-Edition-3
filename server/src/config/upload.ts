import path from "path";

import multer from "multer";

import { isTesting } from "../utils/constants";

const tmpFolder = path.join(
  __dirname,
  "..",
  "..",
  isTesting() ? "tmp-test" : "tmp"
);

export default {
  directory: tmpFolder,
  multer: multer({
    limits: {
      fileSize: 2000000,
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png)$/))
        return cb(new Error("invalid image format"));

      return cb(null, true);
    },
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(req, file, cb) {
        const fileName = `${Date.now()}_${file.originalname}`;

        return cb(null, fileName);
      },
    }),
  }),
};
