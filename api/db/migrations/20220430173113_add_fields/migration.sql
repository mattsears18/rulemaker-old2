/*
  Warnings:

  - Added the required column `created_by_user_id` to the `Rule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "is_public" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "is_public" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Rule" ADD COLUMN     "created_by_user_id" UUID NOT NULL,
ADD COLUMN     "is_public" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "is_published" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "Rule" ADD CONSTRAINT "Rule_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
