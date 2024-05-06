import { ApiProperty } from "@nestjs/swagger";

export class GetResponse {
  @ApiProperty()
  message: string;
}
