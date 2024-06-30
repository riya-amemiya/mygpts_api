import { Module } from "@nestjs/common";

import { ZipCodeController } from "./zip_code.controller";
import { ZipCodeService } from "./zip_code.service";

import { SharedModule } from "@/modules/shared.module";

@Module({
  imports: [SharedModule],
  controllers: [ZipCodeController],
  providers: [ZipCodeService],
})
export class ZipCodeModule {}
