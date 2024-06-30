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

  it("should generate a valid v1 UUID", async () => {
    const uuid = await service.v1();
    expect(uuid).toMatch(
      // biome-ignore lint/nursery/useTopLevelRegex: <explanation>
      /^[\da-f]{8}-[\da-f]{4}-1[\da-f]{3}-[\da-f]{4}-[\da-f]{12}$/,
    );
  });

  it("should generate a valid v4 UUID", async () => {
    const uuid = await service.v4();
    expect(uuid).toMatch(
      // biome-ignore lint/nursery/useTopLevelRegex: <explanation>
      /^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/,
    );
  });

  it("should generate a valid v6 UUID", async () => {
    const uuid = await service.v6();
    expect(uuid).toMatch(
      // biome-ignore lint/nursery/useTopLevelRegex: <explanation>
      /^[\da-f]{8}-[\da-f]{4}-6[\da-f]{3}-[\da-f]{4}-[\da-f]{12}$/,
    );
  });

  it("should generate a valid v7 UUID", async () => {
    const uuid = await service.v7();
    expect(uuid).toMatch(
      // biome-ignore lint/nursery/useTopLevelRegex: <explanation>
      /^[\da-f]{8}-[\da-f]{4}-7[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/,
    );
  });

  it("should return the correct version of a UUID", async () => {
    const uuid = await service.v4();
    const version = await service.version(uuid);
    expect(version).toBe(4);
  });

  it("should validate a valid UUID", async () => {
    const uuid = await service.v4();
    const isValid = await service.validate(uuid);
    expect(isValid).toBe(true);
  });

  it("should invalidate an invalid UUID", async () => {
    const isValid = await service.validate("invalid-uuid");
    expect(isValid).toBe(false);
  });
});
