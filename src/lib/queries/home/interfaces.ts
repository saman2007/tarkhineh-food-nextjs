import { RowDataPacket } from "mysql2";

export interface SliderData extends RowDataPacket {
  id: number;
  text: string;
  image: string;
  targetPage: string;
}
