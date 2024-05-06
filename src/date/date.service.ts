import { Injectable } from "@nestjs/common";

@Injectable()
export class DateService {
  async now(timeDifference = 9): Promise<string> {
    const now = new Date(Date.now() + timeDifference * 3_600_000);
    return now.toISOString();
  }
}
