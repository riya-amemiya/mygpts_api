import { Injectable } from "@nestjs/common";
import { ZipCodeList } from "@prisma/client";

import { PrismaService } from "@/modules/prisma/prisma.service";

@Injectable()
export class ZipCodeService {
  constructor(private readonly prismaService: PrismaService) {}

  async getZipCodes(Postal_Code: string): Promise<ZipCodeList[]> {
    return this.prismaService.zipCodeList.findMany({
      where: {
        Postal_Code: Postal_Code,
      },
    });
  }
}
