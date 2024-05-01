import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { category_id, name, description, price } = req.body;

    if (!category_id || !name || !description || !price || !req.file) {
      throw new Error("Preencha todos os campos obrigatórios");
    }

    const createProductService = new CreateProductService();

    const { filename: banner } = req.file; // desconstruimos e renomeamos para banner

    const product = await createProductService.execute({
      category_id,
      name,
      description,
      banner,
      price,
    });

    return res.json(product);
  }
}

export { CreateProductController };
