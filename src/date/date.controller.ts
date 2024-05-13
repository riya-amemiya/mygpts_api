import { Controller, Get, HttpStatus, Query } from "@nestjs/common";
import { DateService } from "./date.service";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { GetDateNowRequest, GetDateNowResponse } from "./date.dto";

@Controller("date")
export class DateController {
  constructor(private readonly dateService: DateService) {}

  @Get("/now")
  @ApiOperation({ summary: "Get the current date and time" })
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
}
