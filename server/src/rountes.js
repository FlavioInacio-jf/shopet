const express = require('express')
const rounter = express.Router()

const produtoController = require('./controllers/produtoController.js')

rounter.get('/buscarProdutos', produtoController.buscarTodos)
rounter.get('/buscarProduto/:cod_produto', produtoController.buscarUm)
rounter.post('/inserirProduto', produtoController.inserir)
rounter.put('/alterarProduto/:cod_produto', produtoController.alterar)
rounter.delete('/excluirProduto/:cod_produto', produtoController.excluir)


module.exports = rounter;
