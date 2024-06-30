import { Controller, Get, HttpStatus, Query } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiQuery } from "@nestjs/swagger";

import { GetV1UuidRequest, GetV1UuidResponse } from "./dto/v1.dto";
import { GetV4UuidRequest, GetV4UuidResponse } from "./dto/v4.dto";
import { GetV6UuidRequest, GetV6UuidResponse } from "./dto/v6.dto";
import { GetV7UuidRequest, GetV7UuidResponse } from "./dto/v7.dto";
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
  @ApiQuery({ type: GetV1UuidRequest })
  async v1(@Query() { options }: GetV1UuidRequest): Promise<GetV1UuidResponse> {
    return { message: await this.uuidService.v1(options) };
  }

  @Get("/v4")
  @ApiOperation({ summary: "Generate a UUID v4", tags: ["uuid"] })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "UUID v4 generated successfully",
    type: GetV4UuidResponse,
  })
  @ApiQuery({ type: GetV4UuidRequest })
  async v4(@Query() { options }: GetV4UuidRequest): Promise<GetV4UuidResponse> {
    return { message: await this.uuidService.v4(options) };
  }

  @Get("/v6")
  @ApiOperation({ summary: "Generate a UUID v6", tags: ["uuid"] })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "UUID v6 generated successfully",
    type: GetV6UuidResponse,
  })
  @ApiQuery({ type: GetV6UuidRequest })
  async v6(@Query() { options }: GetV6UuidRequest): Promise<GetV6UuidResponse> {
    return { message: await this.uuidService.v6(options) };
  }

  @Get("/v7")
  @ApiOperation({ summary: "Generate a UUID v7", tags: ["uuid"] })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "UUID v7 generated successfully",
    type: GetV7UuidResponse,
  })
  @ApiQuery({ type: GetV7UuidRequest })
  async v7(@Query() { options }: GetV7UuidRequest): Promise<GetV7UuidResponse> {
    return { message: await this.uuidService.v7(options) };
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
