import { Controller, Get, HttpStatus, Query } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

import { DateService } from "./date.service";
import { GetDateFormatRequest, GetDateFormatResponse } from "./dto/format.dto";
import { GetDateNowResponse, GetDateNowRequest } from "./dto/now.dto";

@Controller("date")
export class DateController {
  constructor(private readonly dateService: DateService) {}

  @Get("/now")
  @ApiOperation({ summary: "Get the current date and time", tags: ["date"] })
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetDateNowResponse,
    description: "Successfully retrieved the current date and time",
  })
  async now(
    @Query() { timeDifference }: GetDateNowRequest,
  ): Promise<GetDateNowResponse> {
    return { message: await this.dateService.now(timeDifference) };
  }

  @Get("/format")
  @ApiOperation({ summary: "Format a date", tags: ["date"] })
  @ApiResponse({
    status: HttpStatus.OK,
    type: String,
    description: "Successfully formatted the date",
  })
  async format(
    @Query() { date, formatString, locale }: GetDateFormatRequest,
  ): Promise<GetDateFormatResponse> {
    return {
      message: await this.dateService.format(date, formatString, locale),
    };
  }
}
