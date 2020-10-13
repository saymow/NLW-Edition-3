import { getRepository } from "typeorm";
import * as Yup from "yup";

import Orphanage from "../models/Orphanage";

interface Req {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  imagesPath: Array<{ path: string }>;
  open_on_weekends?: boolean;
}

class CreateOrphanageService {
  public async execute(req: Req) {
    const orphanagesRepository = getRepository(Orphanage);

    const data = {
      ...req,
      images: req.imagesPath,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const orphanage = orphanagesRepository.create(data);

    await orphanagesRepository.save(orphanage);

    return orphanage;
  }
}

export default CreateOrphanageService;
