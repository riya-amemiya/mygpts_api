import { Controller, Get, HttpStatus, Query } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

import { GetUuidV4Response } from "./dto/v4.dto";
import { GetUuidV7Response } from "./dto/v7.dto";
import { UuidService } from "./uuid.service";

@Controller("uuid")
export class UuidController {
  constructor(private readonly uuidService: UuidService) {}

  @Get("/v4")
  @ApiOperation({ summary: "Generate a UUID v4", tags: ["uuid"] })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "UUID v4 generated successfully",
  })
  async v4(): Promise<GetUuidV4Response> {
    return { message: await this.uuidService.v4() };
  }

  @Get("/v7")
  @ApiOperation({ summary: "Generate a UUID v7", tags: ["uuid"] })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "UUID v7 generated successfully",
  })
  async v7(): Promise<GetUuidV7Response> {
    return { message: await this.uuidService.v7() };
  }
}
