import { ApiProperty } from "@nestjs/swagger";
import { V6Options } from "uuid";

export class GetV6UuidRequest {
  @ApiProperty({
    required: false,
    type: "object",
    description: "V6Options object",
  })
  options?: V6Options;
}

export class GetV6UuidResponse {
  @ApiProperty({
    type: String,
    example: "1eb5e342-6e4d-6f54-80c1-586e9cf0c4a6",
    description: "Generated UUID v6",
  })
  message: string;
}
