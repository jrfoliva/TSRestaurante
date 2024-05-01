import prismaClient from "../../prisma";

interface ListProductRequest {
  category_id: string;
}
class ProductsByCategoryService {
  async execute({ category_id }: ListProductRequest) {
    return await prismaClient.product.findMany({
      where: {
        category_id: category_id,
      },
    });
  }
}
export { ProductsByCategoryService };
