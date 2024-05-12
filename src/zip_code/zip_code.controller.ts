import { Controller, Get, HttpStatus, Query } from "@nestjs/common";
import { ZipCodeService } from "./zip_code.service";
import { ZipCodeList } from "@prisma/client";
import { GetZipCodesRequest } from "./zip_code.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { GetResponse } from "@/dto/response.dto";

@Controller("zip-code")
export class ZipCodeController {
  constructor(private readonly zipCodeService: ZipCodeService) {}

  @Get("/get-zip-codes")
  @ApiOperation({ summary: "Get the current date and time" })
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetResponse,
    description: "Successfully retrieved the current date and time",
  })
  async getZipCodes(
    @Query() { postal_code }: GetZipCodesRequest,
  ): Promise<GetResponse<ZipCodeList[]>> {
    return { message: await this.zipCodeService.getZipCodes(postal_code) };
  }
}
