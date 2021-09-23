import { createMockContext, MockContext } from "./prisma.context";
import { UserService } from "./user.service";

describe("UserService", () => {
  let userService: UserService;
  let context: MockContext;

  beforeEach(() => {
    context = createMockContext();
    userService = UserService({ context });
  });

  it("should return correctly", async () => {
    context.prisma.user.findMany.mockResolvedValue([
      { id: 1, email: "test@example.com", name: "Name" },
    ]);

    const result = await userService.findUsers();

    expect(result).toEqual([
      { id: 1, email: "test@example.com", name: "Name" },
    ]);
  });
});
