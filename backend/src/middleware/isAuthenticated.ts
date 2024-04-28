import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
  sub: string; //id
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Receber o token
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(401).end();
  }

  //console.log(authToken);
  // Desconsiderar a primeira parte da string, pegar a segunda parte que terá o nome de token
  const [, token] = authToken.split(" ");
  //console.log(token);

  // Validar o token
  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as PayLoad;
    //console.log(sub); // imprime o id do usuário logado.
    // Recuperar o id do token e alimentar a variável user_id dentro de req.
    req.user_id = sub; // declarado @types em ./src, para criar a variável user_id. Alterado também a propriedade tsconfig.json  "typeRoots":"./src/@types"
  } catch (error) {
    return res.status(401).end();
  }

  return next();
}
