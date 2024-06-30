import { Test, TestingModule } from "@nestjs/testing";
import { UuidController } from "./uuid.controller";
import { UuidService } from "./uuid.service";

describe("UuidController", () => {
  let controller: UuidController;
  let service: UuidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UuidController],
      providers: [UuidService],
    }).compile();

    controller = module.get<UuidController>(UuidController);
    service = module.get<UuidService>(UuidService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should return a UUID v4", async () => {
    const uuidV4 = "123e4567-e89b-12d3-a456-426614174000";
    jest.spyOn(service, "v4").mockResolvedValue(uuidV4);

    const result = await controller.v4();
    expect(result).toEqual({ message: uuidV4 });
  });

  it("should return a UUID v7", async () => {
    const uuidV7 = "123e4567-e89b-7d3a-a456-426614174000";
    jest.spyOn(service, "v7").mockResolvedValue(uuidV7);

    const result = await controller.v7();
    expect(result).toEqual({ message: uuidV7 });
  });
});
