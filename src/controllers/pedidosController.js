import pedidos from "../models/Pedido.js";

class PedidoController {

  static listarPedidos = (req, res) => {
    pedidos.find()
      .populate('cliente')
      .populate('produtos')
      .exec((err, pedidos) => {
        res.status(200).json(pedidos)
      })
  }

  static listarPedidoPorId = (req, res) => {
    const id = req.params.id;

    pedidos.findById(id)
      .populate('cliente', 'nome')
      .exec((err, pedidos) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do pedido não localizado.`})
      } else {
        res.status(200).send(pedidos);
      }
    })
  }

  static cadastrarPedido = (req, res) => {
    let pedido = new pedidos(req.body);

    pedido.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar pedido.`})
      } else {
        res.status(201).send(pedido.toJSON())
      }
    })
  }

  static atualizarPedido = (req, res) => {
    const id = req.params.id;

    pedidos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Pedido atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirPedido = (req, res) => {
    const id = req.params.id;

    pedidos.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Pedido removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }
}

export default PedidoController