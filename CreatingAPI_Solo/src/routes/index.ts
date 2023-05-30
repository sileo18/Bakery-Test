import { Router } from "express";
import { customerRoutes } from "./Customer.routes";

const routes = Router();

routes.use("/customer", customerRoutes);

export { routes };