import { Test, TestingModule } from "@nestjs/testing";
import { CobaltController } from "./cobalt.controller";

describe("CobaltController", () => {
  let controller: CobaltController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CobaltController],
    }).compile();

    controller = module.get<CobaltController>(CobaltController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
