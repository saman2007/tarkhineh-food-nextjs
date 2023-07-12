import { RowDataPacket } from "mysql2";

interface SliderData extends RowDataPacket {
  id: number;
  text: string;
  image: string;
  targetPage: string;
}

interface MenuData extends RowDataPacket {
  id: number;
  name: string;
  image: string;
  href: string;
}

export type { SliderData, MenuData };
