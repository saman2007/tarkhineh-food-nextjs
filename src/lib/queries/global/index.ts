"use server";

import { mysql } from "@/lib/db";
import { SliderData, SlidesPages, UserMessage } from "./interfaces";

export const insertUserMessage = async ({
  email,
  fullname,
  message,
  phoneNumber,
}: UserMessage) => {
  await mysql.query(
    "INSERT INTO user_messages ( fullname, phoneNumber, email, message ) VALUES ( ?, ?, ?, ? )",
    [fullname, phoneNumber, email, message]
  );
};

export const getSliderSlidesQuery = async (
  page: SlidesPages
): Promise<SliderData[]> => {
  const query = `
      SELECT slider_slides.id, slider_slides.text, slider_slides.image, slider_slides.targetPage FROM slides_per_pages
      INNER JOIN slider_pages
          ON slider_pages.id = slides_per_pages.pageId
          AND slider_pages.id = '${page}'
      INNER JOIN slider_slides ON slider_slides.id = slides_per_pages.slideId
  `;
  const slidesData = await mysql.query<SliderData[]>(query);

  return slidesData[0];
};
