import { compare } from "bcryptjs";
import { User } from "../../entities/user.entity";
import { AppError } from "../../error";
import { tLogin, tToken } from "../../interfaces/login.interface";
import { userRepository } from "../../utils/repositories";
import { sign } from "jsonwebtoken";

export const loginService = async (payload: tLogin): Promise<tToken> => {
  const foundUser: User | null = await userRepository.findOneBy({
    username: payload.username,
  });

  if (!foundUser) {
    throw new AppError("Invalid credentials", 400);
  }

  const comparePassword = await compare(payload.password, foundUser.password);

  if (!comparePassword) {
    throw new AppError("Invalid credentials", 400);
  }

  const token: string = sign(
    {
      username: foundUser.username,
      admin: foundUser.admin,
    },
    process.env.SECRET_KEY!,
    {
      subject: foundUser.id.toString(),
    }
  );

  return { token };
};
