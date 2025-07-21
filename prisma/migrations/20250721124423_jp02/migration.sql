-- CreateTable
CREATE TABLE "public"."articles" (
    "id" BIGSERIAL NOT NULL,
    "titre" TEXT,
    "categorie" TEXT,
    "contenu" TEXT,
    "date_creation" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."commentaires" (
    "id" BIGSERIAL NOT NULL,
    "contenu" TEXT,
    "auteur" TEXT,
    "article_id" BIGINT,
    "date_creation" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "commentaires_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."notes" (
    "id" BIGSERIAL NOT NULL,
    "titre" TEXT,
    "contenu" TEXT,
    "date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."profils" (
    "id" TEXT NOT NULL,
    "nom" TEXT,
    "bio" TEXT,
    "date_creation" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profils_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."todos" (
    "id" BIGSERIAL NOT NULL,
    "titre" TEXT,
    "description" TEXT,
    "complete" BOOLEAN DEFAULT false,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."commentaires" ADD CONSTRAINT "commentaires_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "public"."articles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
