import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { join } from "node:path";
import { createReadStream } from "node:fs";
import readline from "node:readline";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { message: string } {
    return this.appService.getHello();
  }

  @Get("/tmp")
  async tmp(): Promise<{ message: string }> {
    const stream = createReadStream(
      join(process.cwd(), "src/tmp/zipcode_list_rows.csv"),
      { encoding: "utf8" },
    );
    const reader = readline.createInterface({ input: stream });

    let lastLine = ""; // 最後の行を保持するための変数

    try {
      for await (const line of reader) {
        lastLine = line; // 各行を読み込むたびに更新
      }
      reader.close();
      return { message: lastLine }; // 最後の行を返す
    } catch (err) {
      console.error("Error reading file:", err);
      throw err;
    }
  }
}
