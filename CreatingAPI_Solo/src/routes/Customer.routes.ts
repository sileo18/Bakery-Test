import { Router } from "express";
import { CreateCustomerController } from "../services/createCustomer/createCustomerController";

const CreateCustomerControllerInstance = new CreateCustomerController();

const customerRoutes = Router();

customerRoutes.post("/", CreateCustomerControllerInstance.handle)

export { customerRoutes }