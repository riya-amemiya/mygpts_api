import { ApiProperty } from "@nestjs/swagger";

export class GetStringToTitleCaseRequest {
  @ApiProperty({ type: String, example: "hello world" })
  str: string;
}

export class GetStringToTitleCaseResponse {
  @ApiProperty({ type: String, example: "Hello World" })
  message: string;
}
