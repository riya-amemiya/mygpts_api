import { ApiProperty } from "@nestjs/swagger";

export class PostCobaltDownloadRequest {
  @ApiProperty({ type: String })
  url: string;

  @ApiProperty({ type: String, enum: ["h264", "av1", "vp9"], default: "h264" })
  vCodec?: string;

  @ApiProperty({ type: String, default: "720" })
  vQuality?: string;

  @ApiProperty({
    type: String,
    enum: ["best", "mp3", "ogg", "wav", "opus"],
    default: "mp3",
  })
  aFormat?: string;

  @ApiProperty({
    type: String,
    enum: ["classic", "pretty", "basic", "nerdy"],
    default: "classic",
  })
  filenamePattern?: string;

  @ApiProperty({ type: Boolean, default: false })
  isAudioOnly?: boolean;

  @ApiProperty({ type: Boolean, default: false })
  isTTFullAudio?: boolean;

  @ApiProperty({ type: Boolean, default: false })
  isAudioMuted?: boolean;

  @ApiProperty({ type: Boolean, default: false })
  dubLang?: boolean;

  @ApiProperty({ type: Boolean, default: false })
  disableMetadata?: boolean;

  @ApiProperty({ type: Boolean, default: false })
  twitterGif?: boolean;

  @ApiProperty({ type: Boolean, default: false })
  tiktokH265?: boolean;
}

export class PickerItemDto {
  @ApiProperty({ type: String })
  type?: string;

  @ApiProperty({ type: String })
  url: string;

  @ApiProperty({ type: String })
  thumb?: string;
}

export class PostCobaltDownloadResponse {
  @ApiProperty({ type: String })
  status: string;

  @ApiProperty({ type: String })
  text?: string;

  @ApiProperty({ type: String })
  url?: string;

  @ApiProperty({ type: String })
  pickerType?: string;

  @ApiProperty({ type: [PickerItemDto] })
  picker?: PickerItemDto[];

  @ApiProperty({ type: String })
  audio?: string;
}
