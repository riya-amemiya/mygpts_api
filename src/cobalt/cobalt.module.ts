import { Module } from "@nestjs/common";
import { CobaltController } from "./cobalt.controller";
import { CobaltService } from "./cobalt.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  controllers: [CobaltController],
  providers: [CobaltService],
})
export class CobaltModule {}
