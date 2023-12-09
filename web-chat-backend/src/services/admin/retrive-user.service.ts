import { User } from "../../entities/user.entity";
import { AppError } from "../../error";
import { tUserResponse } from "../../interfaces/user.interface";
import { userSchemaResponse } from "../../schemas/user.schema";
import { userRepository } from "../../utils/repositories";

export const adminRetriveUserService = async (
  userId: string
): Promise<tUserResponse> => {
  try {
    const user: User | null = await userRepository.findOneBy({ id: userId });
    const returnUser = userSchemaResponse.parse(user);
    return returnUser;
  } catch (error) {
    throw new AppError("User not found", 404);
  }
};
