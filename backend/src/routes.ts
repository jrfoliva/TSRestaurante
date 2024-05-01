import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middleware/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";

import uploadConfig from "./config/multer";
import { ProductsByCategoryController } from "./controllers/product/ProductsByCategoryController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

// Exemplo
// router.get("/teste", (req: Request, res: Response) => {
//   return res.status(200).json({ api: "Pizzaria", status: "online!" });
//   //throw new Error("Erro ao fazer esta requisição."); // Para testar
// });

// -- ROTAS USER --
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

// -- ROTAS CATEGORY --
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);
router.get("/category", isAuthenticated, new ListCategoryController().handle);
router.delete(
  "/category/:id",
  isAuthenticated,
  new DeleteCategoryController().handle
);

// -- ROTAS PRODUTOS --
router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);
router.get(
  "/product",
  isAuthenticated,
  new ProductsByCategoryController().handle
);

export { router };
