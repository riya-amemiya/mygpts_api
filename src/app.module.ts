import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SharedModule } from "./modules/shared.module";
import { CobaltModule } from "./routes/cobalt/cobalt.module";
import { DateModule } from "./routes/date/date.module";
import { FeatureFlagsModule } from "./routes/feature-flags/feature-flags.module";
import { StringModule } from "./routes/string/string.module";
import { UuidModule } from "./routes/uuid/uuid.module";
import { ZipCodeModule } from "./routes/zip_code/zip_code.module";

@Module({
  imports: [
    DateModule,
    ZipCodeModule,
    StringModule,
    SharedModule,
    CobaltModule,
    UuidModule,
    FeatureFlagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
