import { Controller, Get, HttpStatus, Query } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiQuery } from "@nestjs/swagger";

import { GetV1UuidResponse } from "./dto/v1.dto";
import { GetV4UuidResponse } from "./dto/v4.dto";
import { GetV6UuidResponse } from "./dto/v6.dto";
import { GetV7UuidResponse } from "./dto/v7.dto";
import {
  GetValidateUuidRequest,
  GetValidateUuidResponse,
} from "./dto/validate.dto";
import {
  GetVersionUuidRequest,
  GetVersionUuidResponse,
} from "./dto/version.dto";
import { UuidService } from "./uuid.service";

@Controller("uuid")
export class UuidController {
  constructor(private readonly uuidService: UuidService) {}

  @Get("/v1")
  @ApiOperation({ summary: "Generate a UUID v1", tags: ["uuid"] })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "UUID v1 generated successfully",
    type: GetV1UuidResponse,
  })
  async v1(): Promise<GetV1UuidResponse> {
    return { message: await this.uuidService.v1() };
  }

  @Get("/v4")
  @ApiOperation({ summary: "Generate a UUID v4", tags: ["uuid"] })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "UUID v4 generated successfully",
    type: GetV4UuidResponse,
  })
  async v4(): Promise<GetV4UuidResponse> {
    return { message: await this.uuidService.v4() };
  }

  @Get("/v6")
  @ApiOperation({ summary: "Generate a UUID v6", tags: ["uuid"] })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "UUID v6 generated successfully",
    type: GetV6UuidResponse,
  })
  async v6(): Promise<GetV6UuidResponse> {
    return { message: await this.uuidService.v6() };
  }

  @Get("/v7")
  @ApiOperation({ summary: "Generate a UUID v7", tags: ["uuid"] })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "UUID v7 generated successfully",
    type: GetV7UuidResponse,
  })
  async v7(): Promise<GetV7UuidResponse> {
    return { message: await this.uuidService.v7() };
  }

  @Get("/version")
  @ApiOperation({ summary: "Get UUID version", tags: ["uuid"] })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "UUID version returned successfully",
    type: GetVersionUuidResponse,
  })
  @ApiQuery({ type: GetVersionUuidRequest })
  async version(
    @Query() query: GetVersionUuidRequest,
  ): Promise<GetVersionUuidResponse> {
    return { message: await this.uuidService.version(query.uuid) };
  }

  @Get("/validate")
  @ApiOperation({ summary: "Validate UUID", tags: ["uuid"] })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "UUID validation result returned successfully",
    type: GetValidateUuidResponse,
  })
  @ApiQuery({ type: GetValidateUuidRequest })
  async validate(
    @Query() query: GetValidateUuidRequest,
  ): Promise<GetValidateUuidResponse> {
    return { message: await this.uuidService.validate(query.uuid) };
  }
}
