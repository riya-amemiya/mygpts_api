import { Test, TestingModule } from "@nestjs/testing";

import { StringController } from "./string.controller";
import { StringService } from "./string.service";

describe("StringController", () => {
  let controller: StringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StringController],
      providers: [StringService],
    }).compile();

    controller = module.get<StringController>(StringController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
