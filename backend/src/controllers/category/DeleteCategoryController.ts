import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";

class DeleteCategoryController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) {
      throw new Error("Selecione uma categoria para a exclusão!");
    }
    const deleteCategoryService = new DeleteCategoryService();
    const deletedCategory = await deleteCategoryService.execute(id);
    return res.json(deletedCategory);
  }
}

export { DeleteCategoryController };
