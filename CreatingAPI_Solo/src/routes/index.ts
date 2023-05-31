import { Router } from "express";
import { customerRoutes } from "./Customer.routes";
import { productRoutes } from "./Product.routes"

const routes = Router();

routes.use("/customer", customerRoutes);

routes.use("/products/create", productRoutes)

export { routes };