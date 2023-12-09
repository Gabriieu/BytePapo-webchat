import { Router } from "express";
import { isAdminMiddleware } from "../../middlewares/user/is-admin.middleware";
import { adminDeleteUserController, adminListUsersController, adminRetriveUserController } from "../../controllers/admin/admin.controller";

export const adminRoutes: Router = Router()

adminRoutes.get("/users", isAdminMiddleware, adminListUsersController);

adminRoutes.get("/users/:id", isAdminMiddleware, adminRetriveUserController);

adminRoutes.delete("/users/:id", isAdminMiddleware, adminDeleteUserController)
