import { Controller, Get, HttpStatus, Query } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

import { GetZipCodesRequest, GetZipCodesResponse } from "./zip_code.dto";
import { ZipCodeService } from "./zip_code.service";

@Controller("zip-code")
export class ZipCodeController {
  constructor(private readonly zipCodeService: ZipCodeService) {}

  @Get("/get-zip-codes")
  @ApiOperation({
    summary: "Get the current date and time",
    tags: ["zip-code"],
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetZipCodesResponse,
    description: "Successfully retrieved the current date and time",
  })
  async getZipCodes(
    @Query() { postal_code }: GetZipCodesRequest,
  ): Promise<GetZipCodesResponse> {
    return { message: await this.zipCodeService.getZipCodes(postal_code) };
  }
}
