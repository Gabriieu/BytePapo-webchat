import { Request, Response } from "express";
import { listUsersService } from "../../services/admin/list-users.service";
import { userRepository } from "../../utils/repositories";
import { adminRetriveUserService } from "../../services/admin/retrive-user.service";
import { adminDeleteUserService } from "../../services/admin/delete-user.service";

export const adminListUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await listUsersService();

  return res.status(200).json(users);
};

export const adminRetriveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = req.params.id;

  const user = await adminRetriveUserService(userId);

  return res.status(200).json(user);
};


export const adminDeleteUserController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    
  const userId: string = req.params.id;

  await adminDeleteUserService(userId)

  return res.send().status(204)
  }