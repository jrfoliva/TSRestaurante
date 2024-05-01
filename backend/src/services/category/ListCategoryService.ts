import prismaClient from "../../prisma";

interface ListCategoryRequest {
  id: string;
}
class ListCategoryService {
  async execute({ id }: ListCategoryRequest) {
    if (id) {
      const category = await prismaClient.category.findFirst({
        where: {
          id: id,
        },
      });
      return category;
    }
    const categories = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return categories;
  }
}
export { ListCategoryService };
