import { Injectable } from "@nestjs/common";
import {
  v1 as uuidv1,
  v4 as uuidv4,
  v6 as uuidv6,
  v7 as uuidv7,
  version as uuidVersion,
  validate as uuidValidate,
  V1Options,
  V4Options,
  V6Options,
  V7Options,
} from "uuid";

@Injectable()
export class UuidService {
  async v1(options?: V1Options) {
    return uuidv1(options);
  }
  async v4(options?: V4Options) {
    return uuidv4(options);
  }
  async v6(options?: V6Options) {
    return uuidv6(options);
  }
  async v7(options?: V7Options) {
    return uuidv7(options);
  }
  async version(uuid: string) {
    return uuidVersion(uuid);
  }
  async validate(uuid: string) {
    return uuidValidate(uuid);
  }
}
