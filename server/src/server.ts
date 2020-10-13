import express from "express";
import cors from "cors";
import "express-async-errors";

import "./database";

import routes from "./routes";
import uploadConfig from "./config/upload";
import errorHandler from "./errors/handler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(uploadConfig.directory));
app.use(errorHandler);

app.listen(3333);
