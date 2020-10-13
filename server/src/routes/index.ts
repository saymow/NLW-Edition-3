import { Router } from "express";

import OrphanageRoutes from "./orphanages";

const routes = Router();

routes.use("/orphanages", OrphanageRoutes);

export default routes;
