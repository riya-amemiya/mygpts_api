import { ApiProperty } from "@nestjs/swagger";

enum Locale {
  ja = "ja",
  en = "en",
}

export class GetDateFormatRequest {
  @ApiProperty({ type: String, example: "2020-01-01T00:00:00.000Z" })
  date: string;

  @ApiProperty({ type: String, example: "yyyy-MM-dd HH:mm:ss" })
  formatString: string;

  @ApiProperty({ type: Locale, example: "ja" })
  locale: "ja" | "en";
}

export class GetDateFormatResponse {
  @ApiProperty({ type: String, example: "2020-01-01 09:00:00" })
  message: string;
}
