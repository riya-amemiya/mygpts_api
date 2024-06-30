import { ApiProperty } from "@nestjs/swagger";

export class GetUuidV7Response {
  @ApiProperty({
    type: String,
    example: "aaaaaaaa-bbbb-7777-8888-cccccccccccc",
  })
  message: string;
}
