import { Test, TestingModule } from "@nestjs/testing";
import { StringService } from "./string.service";

describe("StringService", () => {
  let service: StringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StringService],
    }).compile();

    service = module.get<StringService>(StringService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should reverse a string", async () => {
    expect(await service.reverseString("hello")).toBe("olleh");
  });

  it("should convert a string to uppercase", async () => {
    expect(await service.toUpperCase("hello")).toBe("HELLO");
  });

  it("should convert a string to lowercase", async () => {
    expect(await service.toLowerCase("HELLO")).toBe("hello");
  });

  it("should convert a string to title case", async () => {
    expect(await service.toTitleCase("hello world")).toBe("Hello World");
  });

  it("should capitalize a string", async () => {
    expect(await service.capitalize("hello")).toBe("Hello");
  });
});
