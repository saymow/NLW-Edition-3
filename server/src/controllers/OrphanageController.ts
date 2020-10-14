import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Orphanage from "../models/Orphanage";
import CreateOrphanageService from "../services/CreateOrphanageService";
import orphanageView from "../views/orphanage_view";

export default {
  async show(req: Request, res: Response) {
    const { id } = req.params;
    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ["images"],
    });

    return res.send(orphanageView.render(orphanage));
  },

  async index(req: Request, res: Response) {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find({
      relations: ["images"],
    });

    return res.send(orphanageView.renderMany(orphanages));
  },
  async create(req: Request, res: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends = false,
    } = req.body;

    const requestImages = (req.files || []) as Express.Multer.File[];
    const imagesPath = requestImages.map((image) => ({
      path: image.filename,
    }));

    const createOrphanageService = new CreateOrphanageService();

    const orphanage = await createOrphanageService.execute({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      imagesPath,
    });

    return res.status(201).send(orphanageView.render(orphanage));
  },
};
