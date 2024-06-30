import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";

import {
  PostCobaltDownloadRequest,
  PostCobaltDownloadResponse,
} from "./dto/download.dto";
import { GetCobaltServerInfoResponse } from "./dto/getServerInfo.dto";

@Injectable()
export class CobaltService {
  constructor(private readonly httpService: HttpService) {}

  async download(
    requestData: PostCobaltDownloadRequest,
  ): Promise<PostCobaltDownloadResponse> {
    const { data } = await firstValueFrom(
      this.httpService.post<PostCobaltDownloadResponse>(
        "https://api.cobalt.tools/api/json",
        requestData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      ),
    );
    return data;
  }

  async getServerInfo(): Promise<GetCobaltServerInfoResponse> {
    const { data } = await firstValueFrom(
      this.httpService.get<GetCobaltServerInfoResponse>(
        "https://api.cobalt.tools/api/serverInfo",
      ),
    );
    return data;
  }
}
