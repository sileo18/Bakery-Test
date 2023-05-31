import { Request, Response } from "express";
import { CreateProductService } from "./createProductService";

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, desc, price, stock  } = req.body

    const createProduct = new CreateProductService()

    const resultCreate = await createProduct.execute({name, desc, price, stock })

    return res.status(201).json(resultCreate)
  }
}