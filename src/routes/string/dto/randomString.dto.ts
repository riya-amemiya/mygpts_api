import { ApiProperty } from "@nestjs/swagger";

export class GetStringRandomStringRequest {
  @ApiProperty({ type: Number, example: 8 })
  size?: number;
  @ApiProperty({
    type: String,
    example: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  })
  char?: string;
}

export class GetStringRandomStringResponse {
  @ApiProperty({ type: String, example: "aBcDeFgH" })
  message: string;
}
