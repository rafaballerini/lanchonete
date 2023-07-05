import produtos from "../models/Produto.js";

class ProdutoController {

  static listarProdutos = (req, res) => {
    produtos.find((err, produtos) => {
      res.status(200).json(produtos)
  })
  }

  static listarProdutoPorId = (req, res) => {
    const id = req.params.id;

    produtos.findById(id, (err, produtos) => {
      if(err) {
        res.status(400).send({message: `${err.message} - ID não localizado.`})
      } else {
        res.status(200).send(produtos);
      }
    })
  }

  static cadastrarProduto = (req, res) => {
    let produto = new produtos(req.body);

    produto.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar Produto.`})
      } else {
        res.status(201).send(produto.toJSON())
      }
    })
  }

  static atualizarProduto = (req, res) => {
    const id = req.params.id;

    produtos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Produto atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirProduto = (req, res) => {
    const id = req.params.id;

    produtos.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Produto removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static listarProdutoPorCategoria = (req, res) => {
    const categoria = req.params.categoria;

    produtos.findOne({categoria: categoria}, (err, produtos) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Categoria não localizado.`})
      } else {
        res.status(200).send(produtos);
      }
    })
  }

}

export default ProdutoController