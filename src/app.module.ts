import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DateModule } from "./date/date.module";
import { PrismaService } from './modules/prisma/prisma.service';

@Module({
  imports: [DateModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
