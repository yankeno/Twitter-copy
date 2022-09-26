-- バックアップ用に作成したが、laravel の migration ファイルを作成したため不要になった
CREATE TABLE `tweets` (
    `id` bigint unsigned NOT NULL AUTO_INCREMENT,
    `user_id` bigint unsigned NOT NULL,
    `tweet` varchar(200) NOT NULL,
    `likes` int unsigned NOT NULL DEFAULT '0',
    `retweets` int unsigned NOT NULL DEFAULT '0',
    `replies` int unsigned NOT NULL DEFAULT '0',
    `user_agent` varchar(1000) DEFAULT NULL,
    `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
    `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `deleted_at` datetime DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `user_id_index` (`user_id`),
    CONSTRAINT `tweets_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 22 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
