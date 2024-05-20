import { ApiProperty } from "@nestjs/swagger";

export class GetStringToLowerCaseRequest {
  @ApiProperty({ type: String, example: "HELLO WORLD" })
  str: string;
}

export class GetStringToLowerCaseResponse {
  @ApiProperty({ type: String, example: "hello world" })
  message: string;
}
