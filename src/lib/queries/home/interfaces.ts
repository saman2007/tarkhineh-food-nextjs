import { RowDataPacket } from "mysql2";

interface SliderData extends RowDataPacket {
  id: number;
  text: string;
  image: string;
  targetPage: string;
}

export type { SliderData };
