"use server";

import { mysql } from "@/lib/db";
import { UserMessage } from "./interfaces";

const insertUserMessage = async ({
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

export { insertUserMessage };
