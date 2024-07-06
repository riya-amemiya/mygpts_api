import { Injectable } from "@nestjs/common";
import { randomString } from "umt-common/module/String/randomString";
import { reverseString } from "umt-common/module/String/reverseString";

@Injectable()
export class StringService {
  async reverseString(string_: string): Promise<string> {
    return reverseString(string_);
  }

  async toUpperCase(string_: string): Promise<string> {
    return string_.toUpperCase();
  }

  async toLowerCase(string_: string): Promise<string> {
    return string_.toLowerCase();
  }

  async toTitleCase(string_: string): Promise<string> {
    return string_.replaceAll(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase(),
    );
  }

  async capitalize(string_: string): Promise<string> {
    return string_.charAt(0).toUpperCase() + string_.slice(1);
  }

  async randomString(
    size = 8,
    char = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  ): Promise<string> {
    return randomString(size, char);
  }
}
