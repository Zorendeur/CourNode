/*
  Warnings:

  - You are about to drop the column `categorie` on the `articles` table. All the data in the column will be lost.
  - The primary key for the `profils` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `userscustom` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `userscustom` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Joshua` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `id` on the `profils` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."articles" DROP COLUMN "categorie";

-- AlterTable
ALTER TABLE "public"."profils" DROP CONSTRAINT "profils_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "profils_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."userscustom" DROP CONSTRAINT "userscustom_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
ADD CONSTRAINT "userscustom_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "public"."Joshua";

-- CreateTable
CREATE TABLE "public"."valentin" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "valentin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."wyatt" (
    "id" BIGSERIAL NOT NULL,
    "titre" TEXT,
    "contenu" TEXT,
    "date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wyatt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."mehdi" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "published" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mehdi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."joshua" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "published" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "joshua_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."jeanpaul" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "published" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "jeanpaul_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."nollan" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "published" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "nollan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."julien" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "published" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "julien_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."axel" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "published" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "axel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."corinne" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "published" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "corinne_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."bocar" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "published" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bocar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."alxis" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "published" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alxis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."celine" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "published" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "celine_pkey" PRIMARY KEY ("id")
);
