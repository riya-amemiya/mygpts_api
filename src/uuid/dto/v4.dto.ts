import { ApiProperty } from "@nestjs/swagger";

export class GetUuidV4Response {
  @ApiProperty({
    type: String,
    example: "aaaaaaaa-bbbb-4444-8888-cccccccccccc",
  })
  message: string;
}
