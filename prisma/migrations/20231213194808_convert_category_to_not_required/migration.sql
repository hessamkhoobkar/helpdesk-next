-- DropForeignKey
ALTER TABLE `ticket` DROP FOREIGN KEY `Ticket_categoryId_fkey`;

-- AlterTable
ALTER TABLE `ticket` MODIFY `categoryId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
