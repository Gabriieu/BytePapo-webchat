import { hash } from "bcryptjs";
import { tUserRequest, tUserResponse } from "../../interfaces/user.interface";
import { User } from "../../entities/user.entity";
import { userRepository } from "../../utils/repositories";
import { userSchemaResponse } from "../../schemas/user.schema";

export const createUserService = async (
  payload: tUserRequest
): Promise<tUserResponse> => {
  payload.password = await hash(payload.password, 10);

  const user: User = userRepository.create(payload);
  await userRepository.save(user);

  const returnUser: tUserResponse = userSchemaResponse.parse(user);

  return returnUser;
};
