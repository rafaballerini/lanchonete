import express from "express";
import ClienteController from "../controllers/clientesController.js";

const router = express.Router();

router
  .get("/clientes", ClienteController.listarClientes)
  .get("/clientes/:cpf", ClienteController.listarClientePorCPF)
  .post("/clientes", ClienteController.cadastrarCliente)
  .put("/clientes/:cpf", ClienteController.atualizarCliente)
  .delete("/clientes/:cpf", ClienteController.excluirCliente)

export default router;   