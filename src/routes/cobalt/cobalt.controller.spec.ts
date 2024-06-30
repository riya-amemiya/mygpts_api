import { HttpModule } from "@nestjs/axios";
import { Test, TestingModule } from "@nestjs/testing";

import { CobaltController } from "./cobalt.controller";
import { CobaltService } from "./cobalt.service";

describe("CobaltController", () => {
  let controller: CobaltController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [CobaltController],
      providers: [CobaltService],
    }).compile();

    controller = module.get<CobaltController>(CobaltController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
