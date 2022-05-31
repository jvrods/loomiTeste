/*
  Warnings:

  - You are about to drop the column `nomeProduto` on the `produto` table. All the data in the column will be lost.
  - Added the required column `nome_produto` to the `produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "produto" DROP COLUMN "nomeProduto",
ADD COLUMN     "nome_produto" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "pedido" (
    "id" SERIAL NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "id_produto" INTEGER NOT NULL,
    "dataPedido" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
