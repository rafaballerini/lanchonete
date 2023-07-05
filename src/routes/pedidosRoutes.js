import express from "express";
import PedidoController from "../controllers/pedidosController.js";

const router = express.Router();

router
  .get("/pedidos", PedidoController.listarPedidos)
  .get("/pedidos/:id", PedidoController.listarPedidoPorId)
  .post("/pedidos", PedidoController.cadastrarPedido)
  .put("/pedidos/:id", PedidoController.atualizarPedido)
  .delete("/pedidos/:id", PedidoController.excluirPedido)

export default router;   