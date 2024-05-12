import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/modules/prisma/prisma.service";
import { ZipCodeList } from "@prisma/client";

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
