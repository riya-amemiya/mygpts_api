import { ApiProperty } from "@nestjs/swagger";

export class GetDateNowRequest {
  @ApiProperty({ type: Number, required: false })
  timeDifference?: number;
}
