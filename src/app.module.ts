import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DateModule } from "./date/date.module";

@Module({
  imports: [DateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
