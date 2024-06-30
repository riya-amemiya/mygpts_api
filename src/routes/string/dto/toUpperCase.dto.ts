import { ApiProperty } from "@nestjs/swagger";

export class GetStringToUpperCaseRequest {
  @ApiProperty({ type: String, example: "hello world" })
  str: string;
}

export class GetStringToUpperCaseResponse {
  @ApiProperty({ type: String, example: "HELLO WORLD" })
  message: string;
}
