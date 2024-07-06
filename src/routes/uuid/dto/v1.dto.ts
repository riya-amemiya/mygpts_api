import { ApiProperty } from "@nestjs/swagger";

export class GetV1UuidResponse {
  @ApiProperty({
    type: String,
    example: "123e4567-e89b-12d3-a456-426614174000",
    description: "Generated UUID v1",
  })
  message: string;

  @ApiProperty({
    type: String,
    example: "v1",
    description: "UUID version",
  })
  version: "v1";
}
