import { ApiProperty } from "@nestjs/swagger";

export class GetZipCodesRequest {
  @ApiProperty({ type: String, required: false })
  postal_code?: string;
}
