import { Request, Response } from "express";
import { CreateCustomerService } from "./createCustomerService";

export class CreateCustomerController {
  async handle(req: Request, res: Response){
    const {firstName, lastName, addres, email} = req.body

    const createCustomer = new CreateCustomerService()

    const resultCreate = await createCustomer.execute({firstName, lastName, addres, email})

    return res.status(201).json(resultCreate)
  }
}