import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema(
  {
    produtos: {type: [mongoose.Schema.Types.ObjectId], ref: 'produtos', required: true},
    cliente: {type: mongoose.Schema.Types.ObjectId, ref: 'clientes', required: true},
    status: {type: String, required: true},
    tempoEspera: {type: Date}
  },
  {
    versionKey: false
  }
);

const pedidos = mongoose.model('pedidos', pedidoSchema);

export default pedidos;