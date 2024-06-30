import { Injectable } from "@nestjs/common";

import { random } from "@/utils/random";

@Injectable()
export class UuidService {
  async v4() {
    return crypto.randomUUID();
  }
  async v7() {
    const DIGITS = "0123456789abcdef";
    const unixTsMs = Date.now();
    const randA = random(0xF_FF);
    const randBHi = random(0x3F_FF_FF_FF);
    const randBLo = random(0xFF_FF_FF_FF);

    const bytes = new Uint8Array(16);
    for (let index = 0; index < 6; index++) {
      bytes[index] = (unixTsMs >>> ((5 - index) * 8)) & 0xFF;
    }
    bytes[6] = 0x70 | (randA >>> 8);
    bytes[7] = randA & 0xFF;
    bytes[8] = 0x80 | (randBHi >>> 24);
    bytes[9] = (randBHi >>> 16) & 0xFF;
    bytes[10] = (randBHi >>> 8) & 0xFF;
    bytes[11] = randBHi & 0xFF;
    bytes[12] = (randBLo >>> 24) & 0xFF;
    bytes[13] = (randBLo >>> 16) & 0xFF;
    bytes[14] = (randBLo >>> 8) & 0xFF;
    bytes[15] = randBLo & 0xFF;

    let uuid = "";
    for (const [index, byte] of bytes.entries()) {
      uuid += DIGITS[byte >>> 4] + DIGITS[byte & 0xF];
      if (index === 3 || index === 5 || index === 7 || index === 9) {
        uuid += "-";
      }
    }

    return uuid;
  }
}
