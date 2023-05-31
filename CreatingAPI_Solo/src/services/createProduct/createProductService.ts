import { Product } from "@prisma/client";
import { createProductDTO } from "../../DTOS/createProductDTO";
import { prisma } from "../../prisma/client";

export class CreateProductService {
  async execute ( {name, desc, price, stock }: createProductDTO ): Promise <Product> {
    //Verificar se produto já existe
    const productAlreadyExists = await prisma.product.findUnique({
      where: {
        name,
      },
    })

    if (productAlreadyExists) {
      //Error
    }

    const product = await prisma.product.create({
      data: {
      name,
      desc,
      price,
      stock
      }
    })

    

    return product;
  }
}