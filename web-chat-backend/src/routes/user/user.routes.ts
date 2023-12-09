import { Router } from "express";
import { createUsersController } from "../../controllers/user/user.controller";
import { validateDataMiddleware } from "../../middlewares/data/data-validation.middleware";
import { userSchemaRequest } from "../../schemas/user.schema";
import { ensureUserDoesNotExistMiddleware } from "../../middlewares/user/ensure-user-does-not-exist";

export const userRoutes: Router = Router();

userRoutes.post(
  "",
  validateDataMiddleware(userSchemaRequest),
  ensureUserDoesNotExistMiddleware,
  createUsersController
);


  /*
  userRoutes.get("/:id", retrieveUsersController);
  userRoutes.patch(
    "/:id",
    ensureDataIsValidMiddleware(userSchemaUpdateRequest),
    updateUsersController
  ); */
