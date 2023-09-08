CREATE TABLE `slider_pages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `page` tinytext NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='A page that has the routes of all pages with the main slider.\nThis table relates to tables: slider_slides - slides_per_page'