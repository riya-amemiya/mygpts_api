import { ApiProperty } from "@nestjs/swagger";

export class GetValidateUuidRequest {
  @ApiProperty({
    type: String,
    example: "123e4567-e89b-42d3-a456-426614174000",
    description: "UUID to validate",
  })
  uuid: string;
}

export class GetValidateUuidResponse {
  @ApiProperty({
    type: Boolean,
    example: true,
    description: "Whether the UUID is valid",
  })
  message: boolean;
}
