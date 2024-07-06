import { ApiProperty } from "@nestjs/swagger";
export class GetV6UuidResponse {
  @ApiProperty({
    type: String,
    example: "1eb5e342-6e4d-6f54-80c1-586e9cf0c4a6",
    description: "Generated UUID v6",
  })
  message: string;

  @ApiProperty({
    type: String,
    example: "v6",
    description: "UUID version",
  })
  version: "v6";
}
