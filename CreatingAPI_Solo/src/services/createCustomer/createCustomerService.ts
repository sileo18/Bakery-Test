import { Customer } from "@prisma/client";
import { CreateCustomerDTO } from "../../DTOS/createCustomerDTO";
import { prisma } from "../../prisma/client";

export class CreateCustomerService {
  async execute ( {firstName, lastName, addres, email}: CreateCustomerDTO): Promise<Customer> {
    //Verificar se customer existe
    const customerAlreadyExists = await prisma.customer.findUnique({
      where: {
        email,
      },
    })

    if (customerAlreadyExists) {
      //error
    }

    const user = await prisma.customer.create({
      data: {
        firstName,
        lastName,
        email,
        addres
      }
      
    })

    return user
  }
}