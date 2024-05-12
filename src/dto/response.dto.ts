import { ApiProperty } from "@nestjs/swagger";

export class GetResponse<T = string> {
  @ApiProperty()
  message: T;
}
