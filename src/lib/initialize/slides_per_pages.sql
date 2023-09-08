CREATE TABLE `slides_per_pages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pageId` int NOT NULL,
  `slideId` int NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `ff_idx` (`slideId`),
  KEY `slider_pages_foreign_idx` (`pageId`),
  CONSTRAINT `slider_pages_foreign` FOREIGN KEY (`pageId`) REFERENCES `slider_pages` (`id`),
  CONSTRAINT `slides_foreign` FOREIGN KEY (`slideId`) REFERENCES `slider_slides` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='A table that has all slides of main slider that belong to specific pages(hpme and branches pages).\nThis table relates to tables: slider_pages - slides_slides'