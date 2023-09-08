import { RowDataPacket } from "mysql2";
interface UserMessage {
  fullname: string;
  phoneNumber: string;
  email: string;
  message: string;
}

export enum SlidesPages {
  "/branches/ekbatan" = 1,
  "/",
  "/branches/vanak",
  "/branches/eghdisiye",
  "/branches/chaloos",
}

export interface SliderData extends RowDataPacket {
  id: number;
  text: string;
  image: string;
  targetPage: string;
}

export type { UserMessage };
