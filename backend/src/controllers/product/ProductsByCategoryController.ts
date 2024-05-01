import { Request, Response } from "express";
import { ProductsByCategoryService } from "../../services/product/ProductsByCategoryService";

class ProductsByCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;
    if (!category_id) {
      throw new Error("Informe o id da categoria!");
    }
    const productsByCategoryService = new ProductsByCategoryService();
    return res.json(await productsByCategoryService.execute({ category_id }));
  }
}

export { ProductsByCategoryController };
