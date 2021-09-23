import { createContext } from "./prisma.context";
import { UserService } from "./user.service";

async function main() {
  const userService = UserService({ context: createContext() });
  const allUsers = await userService.findUsers();

  return allUsers;
}

(async () => {
  try {
    const result = await main();
    console.log("result", result);
  } catch (error) {
    console.error("err", error);
  }
})();
