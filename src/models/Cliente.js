import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
  {
    cpf: {type: String, required: true},
    nome: {type: String, required: true},
    email: {type: String, required: true}
  },
  {
    versionKey: false
  }
)

const clientes = mongoose.model("clientes", clienteSchema)

export default clientes;