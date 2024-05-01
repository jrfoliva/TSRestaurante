import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string;
}

class CreateCategorySerivce {
  async execute({ name }: CategoryRequest) {
    if (!name) {
      throw new Error("Nome de categoria inválida.");
    }

    const categoryExists = await prismaClient.category.findFirst({
      where: {
        name: name,
      },
    });

    if (categoryExists) {
      throw new Error("Categoria já existe.");
    }

    const category = await prismaClient.category.create({
      data: {
        name: name,
      },
    });

    return category;
  }
}

export { CreateCategorySerivce };
