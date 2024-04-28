import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middleware/isAuthenticated";

const router = Router();

// Exemplo
// router.get("/teste", (req: Request, res: Response) => {
//   return res.status(200).json({ api: "Pizzaria", status: "online!" });
//   //throw new Error("Erro ao fazer esta requisição."); // Para testar
// });

// -- ROTAS USER --
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

export { router };
