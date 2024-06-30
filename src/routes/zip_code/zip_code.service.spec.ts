import { Test, TestingModule } from "@nestjs/testing";

import { ZipCodeService } from "./zip_code.service";

import { SharedModule } from "@/modules/shared.module";

describe("ZipCodeService", () => {
  let service: ZipCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SharedModule],
      providers: [ZipCodeService],
    }).compile();

    service = module.get<ZipCodeService>(ZipCodeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
