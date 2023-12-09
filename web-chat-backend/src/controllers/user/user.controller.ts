import { Request, Response } from "express";
import { tUserRequest } from "../../interfaces/user.interface";
import { createUserService } from "../../services/users/create-user.service";

export const createUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payLoad: tUserRequest = req.body;

  const user = await createUserService(payLoad);

  return res.status(201).json(user);
};

