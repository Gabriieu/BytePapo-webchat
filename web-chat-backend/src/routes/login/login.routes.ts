import { Router } from "express";
import { validateDataMiddleware } from "../../middlewares/data/data-validation.middleware";
import { loginSchema } from "../../schemas/login.schema";
import { loginController } from "../../controllers/login/login.controller";

export const loginRoutes: Router = Router();

loginRoutes.post("", validateDataMiddleware(loginSchema), loginController);
