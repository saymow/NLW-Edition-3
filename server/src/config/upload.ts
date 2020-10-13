import path from "path";

import multer from "multer";

const tmpFolder = path.join(__dirname, "..", "..", "tmp");

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
        console.log(fileName);

        return cb(null, fileName);
      },
    }),
  }),
};
