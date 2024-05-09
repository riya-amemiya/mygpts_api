import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DateModule } from "./date/date.module";
import { PrismaService } from './modules/prisma/prisma.service';
import { ZipCodeModule } from './zip_code/zip_code.module';

@Module({
  imports: [DateModule, ZipCodeModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
