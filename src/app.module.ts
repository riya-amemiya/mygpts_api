import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DateModule } from "./date/date.module";
import { ZipCodeModule } from "./zip_code/zip_code.module";
import { StringModule } from "./string/string.module";
import { SharedModule } from "./modules/shared.module";

@Module({
  imports: [DateModule, ZipCodeModule, StringModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
