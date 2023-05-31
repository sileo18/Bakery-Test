import { Router } from "express";
import { CreateProductController } from "../services/createProduct/createProductController";

const createProductControllerInstance = new CreateProductController()

const productRoutes = Router()

productRoutes.post("/", createProductControllerInstance.handle)

export { productRoutes }