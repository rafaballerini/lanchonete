import express from "express";
import livros from "./pedidosRoutes.js"
import clientes from "./clientesRoutes.js"
import produtos from "./produtosRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Lanchonete"})
  })

  app.use(
    express.json(),
    livros,
    clientes,
    produtos
  )
}

export default routes