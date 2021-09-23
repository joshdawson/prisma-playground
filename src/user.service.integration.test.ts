import { createContext } from "./prisma.context";
import { UserService } from "./user.service";

const context = createContext();
const { prisma } = context;

describe("UserService - integration", () => {
  beforeAll(async () => {
    await prisma.user.createMany({
      data: [
        {
          id: 1,
          name: "User one",
          email: "userone@example.com",
        },
        {
          id: 2,
          name: "User two",
          email: "usertwo@example.com",
        },
        {
          id: 3,
          name: "User three",
          email: "userthree@example.com",
        },
      ],
    });

    console.log("Seeded users");
  });

  afterAll(async () => {
    await prisma.user.deleteMany();
    console.log("Deleted users");

    await prisma.$disconnect();
  });

  describe("findUsers", () => {
    it("should find users", async () => {
      const userService = UserService({ context });

      const result = await userService.findUsers();

      expect(result.length).toBe(3);
    });
  });
});
