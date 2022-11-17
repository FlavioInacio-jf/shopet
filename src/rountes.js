const express = require('express')
const rounter = express.Router()

const produtoController = require('./controllers/produtoController.js')

rounter.get('/produtos', produtoController.buscarTodos)
rounter.get('/produtos/:cod_produto', produtoController.buscarUm)
rounter.post('/produto', produtoController.inserir)
rounter.put('/produto/:cod_produto', produtoController.alterar)
rounter.delete('/produto/:cod_produto', produtoController.excluir)


module.exports = rounter;
