import { Module } from "@nestjs/common";
import { ZipCodeController } from "./zip_code.controller";
import { ZipCodeService } from "./zip_code.service";
import { PrismaService } from "@/modules/prisma/prisma.service";

@Module({
  controllers: [ZipCodeController],
  providers: [ZipCodeService, PrismaService],
})
export class ZipCodeModule {}
