import { ApiProperty } from "@nestjs/swagger";
import { ZipCodeList } from "@prisma/client";

export class GetZipCodesRequest {
  @ApiProperty({ type: String, required: false })
  postal_code?: string;
}

export class GetZipCodesResponse {
  @ApiProperty({
    example: {
      message: [
        {
          id: 40_364,
          JIS_Code: "13113",
          Old_Postal_Code: '"150  "',
          Postal_Code: "1500002",
          Prefecture_Name_Kana: "ﾄｳｷｮｳﾄ",
          City_Ward_Town_Village_Name_Kana: "ｼﾌﾞﾔｸ",
          Area_Name_Kana: "ｼﾌﾞﾔ",
          Prefecture_Name: "東京都",
          City_Ward_Town_Village_Name: "渋谷区",
          Area_Name: "渋谷",
          Indicates_More_Than_One_Postal_Code_for_the_Same_Area: "0",
          Indicates_a_Subarea_with_Numbered_Addresses: "0",
          Indicates_Presence_of_Chome_in_the_Area: "1",
          Indicates_One_Postal_Code_for_Multiple_Areas: "0",
          Update_Display: "0",
          Change_Reason: "0",
        },
      ],
    },
  })
  message: ZipCodeList[];
}
