import { Controller } from "@nestjs/common";
import { ZipCodeService } from "./zip_code.service";

@Controller("zip-code")
export class ZipCodeController {
  constructor(private readonly zipCodeService: ZipCodeService) {}
}
