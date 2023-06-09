-- CreateTable
CREATE TABLE `event` (
    `id_event` INTEGER NOT NULL AUTO_INCREMENT,
    `data` LONGTEXT NOT NULL,
    `date_created_event` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `event_id_event_key`(`id_event`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
