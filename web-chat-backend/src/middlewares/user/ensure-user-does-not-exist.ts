import { NextFunction, Request, Response } from "express";
import { User } from "../../entities/user.entity";
import { userRepository } from "../../utils/repositories";
import { AppError } from "../../error";

export const ensureUserDoesNotExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const username = req.body.username;

  const foundUser: User | null = await userRepository.findOneBy({
    username: username,
  });

  if (foundUser) {
    throw new AppError("This username already exists", 409);
  }

  return next();
};
