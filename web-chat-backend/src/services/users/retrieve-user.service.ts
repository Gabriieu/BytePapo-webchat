import { User } from "../../entities/user.entity";
import { AppError } from "../../error";
import { tUserResponse } from "../../interfaces/user.interface";
import { userSchemaResponse } from "../../schemas/user.schema";
import { userRepository } from "../../utils/repositories";

export const retrieveUserService = async (
  userId: string
): Promise<tUserResponse> => {
  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const returnUser = userSchemaResponse.parse(user);

  return returnUser;
};
