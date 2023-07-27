CREATE TABLE `slides` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` tinytext NOT NULL,
  `image` text NOT NULL,
  `targetPage` tinytext NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci