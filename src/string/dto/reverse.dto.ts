import { ApiProperty } from "@nestjs/swagger";

export class GetStringReverseRequest {
  @ApiProperty({ type: String, example: "hello world" })
  str: string;
}

export class GetStringReverseResponse {
  @ApiProperty({ type: String, example: "dlrow olleh" })
  message: string;
}
