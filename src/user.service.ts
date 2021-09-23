import { User } from ".prisma/client";
import { Context } from "./prisma.context";

export interface UserService {
  findUsers: () => Promise<User[]>;
}

export const UserService = ({ context }: { context: Context }): UserService => {
  return {
    findUsers() {
      return context.prisma.user.findMany();
    },
  };
};
