import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";

import { CobaltController } from "./cobalt.controller";
import { CobaltService } from "./cobalt.service";

@Module({
  imports: [HttpModule],
  controllers: [CobaltController],
  providers: [CobaltService],
})
export class CobaltModule {}
