import { Module } from "@nestjs/common";
import { ZipCodeController } from "./zip_code.controller";
import { ZipCodeService } from "./zip_code.service";

@Module({
  controllers: [ZipCodeController],
  providers: [ZipCodeService],
})
export class ZipCodeModule {}
