import { ApiProperty } from "@nestjs/swagger";

export class GetStringCapitalizeRequest {
  @ApiProperty({ type: String, example: "hello world" })
  str: string;
}

export class GetStringCapitalizeResponse {
  @ApiProperty({ type: String, example: "Hello world" })
  message: string;
}
