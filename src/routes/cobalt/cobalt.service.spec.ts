import { HttpModule } from "@nestjs/axios";
import { Test, TestingModule } from "@nestjs/testing";

import { CobaltService } from "./cobalt.service";

describe("CobaltService", () => {
  let service: CobaltService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [CobaltService],
    }).compile();

    service = module.get<CobaltService>(CobaltService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
