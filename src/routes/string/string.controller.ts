import { Controller, Get, HttpStatus, Query } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

import {
  GetStringCapitalizeResponse,
  GetStringCapitalizeRequest,
} from "./dto/capitalize.dto";
import {
  GetStringReverseRequest,
  GetStringReverseResponse,
} from "./dto/reverse.dto";
import {
  GetStringToLowerCaseResponse,
  GetStringToLowerCaseRequest,
} from "./dto/toLowerCase.dto";
import {
  GetStringToTitleCaseRequest,
  GetStringToTitleCaseResponse,
} from "./dto/toTitleCase.dto";
import {
  GetStringToUpperCaseRequest,
  GetStringToUpperCaseResponse,
} from "./dto/toUpperCase.dto";
import { StringService } from "./string.service";

@Controller("string")
export class StringController {
  constructor(private readonly stringService: StringService) {}

  @Get("/reverse")
  @ApiOperation({ summary: "Reverse a string", tags: ["string"] })
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetStringReverseResponse,
    description: "Successfully reversed the string",
  })
  async reverseString(
    @Query() { str }: GetStringReverseRequest,
  ): Promise<GetStringReverseResponse> {
    return { message: await this.stringService.reverseString(str) };
  }

  @Get("/uppercase")
  @ApiOperation({ summary: "Convert a string to uppercase", tags: ["string"] })
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetStringToUpperCaseResponse,
    description: "Successfully converted the string to uppercase",
  })
  async toUpperCase(
    @Query() { str }: GetStringToUpperCaseRequest,
  ): Promise<GetStringToUpperCaseResponse> {
    return { message: await this.stringService.toUpperCase(str) };
  }

  @Get("/lowercase")
  @ApiOperation({ summary: "Convert a string to lowercase", tags: ["string"] })
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetStringToLowerCaseResponse,
    description: "Successfully converted the string to lowercase",
  })
  async toLowerCase(
    @Query() { str }: GetStringToLowerCaseRequest,
  ): Promise<GetStringToLowerCaseResponse> {
    return { message: await this.stringService.toLowerCase(str) };
  }

  @Get("/titlecase")
  @ApiOperation({ summary: "Convert a string to title case", tags: ["string"] })
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetStringToTitleCaseResponse,
    description: "Successfully converted the string to title case",
  })
  async toTitleCase(
    @Query() { str }: GetStringToTitleCaseRequest,
  ): Promise<GetStringToTitleCaseResponse> {
    return { message: await this.stringService.toTitleCase(str) };
  }

  @Get("/capitalize")
  @ApiOperation({ summary: "Capitalize a string", tags: ["string"] })
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetStringCapitalizeResponse,
    description: "Successfully capitalized the string",
  })
  async capitalize(
    @Query() { str }: GetStringCapitalizeRequest,
  ): Promise<GetStringCapitalizeResponse> {
    return { message: await this.stringService.capitalize(str) };
  }
}
