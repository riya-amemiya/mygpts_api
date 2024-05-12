import { Controller, Get, HttpStatus, Query } from "@nestjs/common";
import { DateService } from "./date.service";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { GetResponse } from "@/dto/response.dto";
import { GetDateNowRequest } from "./date.dto";

@Controller("date")
export class DateController {
  constructor(private readonly dateService: DateService) {}

  @Get("/now")
  @ApiOperation({ summary: "Get the current date and time" })
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetResponse,
    description: "Successfully retrieved the current date and time",
  })
  async now(
    @Query() { timeDifference }: GetDateNowRequest,
  ): Promise<GetResponse> {
    return { message: await this.dateService.now(timeDifference) };
  }
}
