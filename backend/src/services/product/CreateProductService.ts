import prismaClient from "../../prisma";

interface CreateProductRequest {
  name: string;
  description: string;
  banner: string;
  price: string;
  category_id: string;
}

class CreateProductService {
  async execute({
    category_id,
    name,
    description,
    price,
    banner,
  }: CreateProductRequest) {
    const productExists = await prismaClient.product.findFirst({
      where: {
        name: name,
      },
    });
    if (productExists) {
      throw new Error("Produto já existente.");
    }
    const product = await prismaClient.product.create({
      data: {
        category_id: category_id,
        name: name,
        description: description,
        banner: banner,
        price: price,
      },
    });

    return product;
  }
}

export { CreateProductService };
