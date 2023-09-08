CREATE TABLE `user_messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` text NOT NULL,
  `phoneNumber` text NOT NULL,
  `email` text,
  `message` longtext NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='A table for the messages that were sent by the users from the footer of the page'