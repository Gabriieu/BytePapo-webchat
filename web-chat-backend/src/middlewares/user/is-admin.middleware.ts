import { NextFunction, Request, Response } from "express";
import { AppError } from "../../error";
import { verify } from "jsonwebtoken";

export const isAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Token is missing", 401);
  }

  token = token.split(" ")[1];

  verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
    if (error) throw new AppError(error.message, 401);

    res.locals.username = decoded.sub;
    res.locals.admin = decoded.admin;

    if (!res.locals.admin) {
      throw new AppError("Insufficient permission", 403);
    }

    next();
  });
};
