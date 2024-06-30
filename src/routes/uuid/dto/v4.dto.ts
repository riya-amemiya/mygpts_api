import { ApiProperty } from "@nestjs/swagger";
import { V4Options } from "uuid";

export class GetV4UuidRequest {
  @ApiProperty({
    required: false,
    type: "object",
    description: "V4Options object",
  })
  options?: V4Options;
}

export class GetV4UuidResponse {
  @ApiProperty({
    type: String,
    example: "123e4567-e89b-42d3-a456-426614174000",
    description: "Generated UUID v4",
  })
  message: string;
}
