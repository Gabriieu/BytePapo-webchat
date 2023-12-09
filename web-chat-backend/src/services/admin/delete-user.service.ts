import { User } from "../../entities/user.entity";
import { AppError } from "../../error";
import { userRepository } from "../../utils/repositories";

export const adminDeleteUserService = async (userId: string): Promise<void> => {
  try {
    const user: User | null = await userRepository.findOneBy({ id: userId });
    if (user) {
      await userRepository.remove(user);
    }
    return;
  } catch (error) {
    throw new AppError("User not found", 404);
  }
};
