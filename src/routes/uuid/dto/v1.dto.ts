import { ApiProperty } from "@nestjs/swagger";
import { V1Options } from "uuid";

export class GetV1UuidRequest {
  @ApiProperty({
    required: false,
    type: "object",
    description: "V1Options object",
  })
  options?: V1Options;
}

export class GetV1UuidResponse {
  @ApiProperty({
    type: String,
    example: "123e4567-e89b-12d3-a456-426614174000",
    description: "Generated UUID v1",
  })
  message: string;
}
