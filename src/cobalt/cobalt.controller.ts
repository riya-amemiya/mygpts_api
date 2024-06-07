import { Controller, Post, Body, Get } from "@nestjs/common";
import { CobaltService } from "./cobalt.service";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import {
  PostCobaltDownloadRequest,
  PostCobaltDownloadResponse,
} from "./dto/download.dto";
import { GetCobaltServerInfoResponse } from "./dto/getServerInfo.dto";

@Controller("cobalt")
export class CobaltController {
  constructor(private readonly cobaltService: CobaltService) {}

  @Post("/download")
  @ApiOperation({ summary: "Download a video", tags: ["cobalt"] })
  @ApiResponse({
    status: 200,
    description: "Cobalt API response",
    type: PostCobaltDownloadResponse,
  })
  async download(
    @Body() requestData: PostCobaltDownloadRequest,
  ): Promise<PostCobaltDownloadResponse> {
    return this.cobaltService.download(requestData);
  }

  @Get("/serverInfo")
  @ApiOperation({ summary: "Get Cobalt server info", tags: ["cobalt"] })
  @ApiResponse({
    status: 200,
    description: "Cobalt server info",
    type: GetCobaltServerInfoResponse,
  })
  async getServerInfo(): Promise<GetCobaltServerInfoResponse> {
    return this.cobaltService.getServerInfo();
  }
}
