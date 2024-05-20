import { Injectable } from "@nestjs/common";

@Injectable()
export class StringService {
  async reverseString(str: string): Promise<string> {
    return str.split("").reverse().join("");
  }

  async toUpperCase(str: string): Promise<string> {
    return str.toUpperCase();
  }

  async toLowerCase(str: string): Promise<string> {
    return str.toLowerCase();
  }

  async toTitleCase(str: string): Promise<string> {
    return str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
    );
  }

  async capitalize(str: string): Promise<string> {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
