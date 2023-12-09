import { Request, Response } from "express";
import { tLogin } from "../../interfaces/login.interface";
import { loginService } from "../../services/login/login.service";

export const loginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payload: tLogin = req.body;

  const login = await loginService(payload);

  return res.status(200).json(login);
};