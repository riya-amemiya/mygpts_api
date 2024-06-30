import { ApiProperty } from "@nestjs/swagger";

export class GetVersionUuidRequest {
  @ApiProperty({
    type: String,
    example: "123e4567-e89b-42d3-a456-426614174000",
    description: "UUID to get version for",
  })
  uuid: string;
}

export class GetVersionUuidResponse {
  @ApiProperty({
    type: Number,
    example: 4,
    description: "Version of the UUID",
    nullable: true,
  })
  message: number | null;
}
