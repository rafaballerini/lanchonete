import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
  {
    nome: {type: String, required: true},
    categoria: {type: String, required: true},
    preco: {type: Number, required: true},
    descricao: {type: String},
    imagem: {type: String}
  },
  {
    versionKey: false
  }
);

const produtos = mongoose.model('produtos', produtoSchema);

export default produtos;