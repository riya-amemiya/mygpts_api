import { Injectable } from "@nestjs/common";
import { format } from "date-fns";
import { enUS, ja } from "date-fns/locale";

@Injectable()
export class DateService {
  async now(timeDifference = 9): Promise<string> {
    const now = new Date(Date.now() + timeDifference * 3_600_000);
    return now.toISOString();
  }

  async format(
    date: string,
    formatString: string,
    locale: "ja" | "en" = "ja",
  ): Promise<string> {
    return format(date, formatString, {
      locale: locale === "ja" ? ja : locale === "en" ? enUS : undefined,
    });
  }
}
