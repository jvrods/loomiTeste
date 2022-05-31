-- CreateTable
CREATE TABLE "produto" (
    "id" SERIAL NOT NULL,
    "nomeProduto" TEXT NOT NULL,
    "preco" INTEGER NOT NULL,
    "codigo" INTEGER NOT NULL,
    "caracteristicas" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);
