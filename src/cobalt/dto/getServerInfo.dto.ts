import { ApiProperty } from "@nestjs/swagger";

export class GetCobaltServerInfoResponse {
  @ApiProperty({ type: String })
  version: string;

  @ApiProperty({ type: String })
  commit: string;

  @ApiProperty({ type: String })
  branch: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  url: string;

  @ApiProperty({ type: Number })
  cors: number;

  @ApiProperty({ type: String })
  startTime: string;
}
