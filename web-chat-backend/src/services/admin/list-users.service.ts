import { User } from "../../entities/user.entity";
import { tUserResponse } from "../../interfaces/user.interface";
import { userSchemaResponse } from "../../schemas/user.schema";
import { userRepository } from "../../utils/repositories";

export const listUsersService = async (): Promise<tUserResponse[]> => {
  const users: User[] | [] = await userRepository.find();
  const returnList = users.map(user => userSchemaResponse.parse(user))
  console.log(returnList)
  return returnList;
};
