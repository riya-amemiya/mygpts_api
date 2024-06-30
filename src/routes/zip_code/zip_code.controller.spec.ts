import { Test, TestingModule } from "@nestjs/testing";

import { ZipCodeController } from "./zip_code.controller";
import { ZipCodeService } from "./zip_code.service";

import { SharedModule } from "@/modules/shared.module";

describe("ZipCodeController", () => {
  let controller: ZipCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SharedModule],
      controllers: [ZipCodeController],
      providers: [ZipCodeService],
    }).compile();

    controller = module.get<ZipCodeController>(ZipCodeController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
