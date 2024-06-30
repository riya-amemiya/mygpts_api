import { ApiProperty } from "@nestjs/swagger";

export class GetDateNowRequest {
  @ApiProperty({ type: Number, required: false })
  timeDifference?: number;
}

export class GetDateNowResponse {
  @ApiProperty({ type: String, example: "2020-01-01T00:00:00.000Z" })
  message: string;
}
