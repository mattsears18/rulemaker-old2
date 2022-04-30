/*
  Warnings:

  - Added the required column `created_by_user_id` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by_user_id` to the `Organization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "created_by_user_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "created_by_user_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
