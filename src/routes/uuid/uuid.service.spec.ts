import { Test, TestingModule } from "@nestjs/testing";
import { UuidService } from "./uuid.service";

describe("UuidService", () => {
  let service: UuidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UuidService],
    }).compile();

    service = module.get<UuidService>(UuidService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should generate a valid v4 UUID", async () => {
    const uuid = await service.v4();
    expect(uuid).toMatch(
      // biome-ignore lint/nursery/useTopLevelRegex: <explanation>
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
    );
  });

  it("should generate a valid v7 UUID", async () => {
    const uuid = await service.v7();
    expect(uuid).toMatch(
      // biome-ignore lint/nursery/useTopLevelRegex: <explanation>
      /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
    );
  });
});
