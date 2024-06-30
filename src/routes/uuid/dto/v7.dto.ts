import { ApiProperty } from "@nestjs/swagger";
import { V7Options } from "uuid";

export class GetV7UuidRequest {
  @ApiProperty({
    required: false,
    type: "object",
    description: "V7Options object",
  })
  options?: V7Options;
}

export class GetV7UuidResponse {
  @ApiProperty({
    type: String,
    example: "018b0310-a2c0-7a0e-b713-934d2a7df0b1",
    description: "Generated UUID v7",
  })
  message: string;
}
