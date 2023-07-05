import express from "express";
import ProdutoController from "../controllers/produtosController.js";

const router = express.Router();

router
  .get("/produtos", ProdutoController.listarProdutos)
  .get("/produtos/:id", ProdutoController.listarProdutoPorId)
  .get("/produtos/buscar/:categoria", ProdutoController.listarProdutoPorCategoria)
  .post("/produtos", ProdutoController.cadastrarProduto)
  .put("/produtos/:id", ProdutoController.atualizarProduto)
  .delete("/produtos/:id", ProdutoController.excluirProduto)

export default router;   