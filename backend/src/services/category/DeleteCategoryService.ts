import prismaClient from "../../prisma";

class DeleteCategoryService {
  async execute(id: string) {
    const aDeleteItem = await prismaClient.category.delete({
      where: {
        id: id,
      },
    });

    return aDeleteItem;
  }
}

export { DeleteCategoryService };
