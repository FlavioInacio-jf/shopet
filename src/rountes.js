const express = require('express')
const rounter = express.Router()

const produtoController = require('./controllers/produtoController.js')

rounter.get('/produtos', produtoController.buscarTodos)
rounter.get('/produtos/:codigo', produtoController.buscarUm)
rounter.post('/produto', produtoController.inserir)

module.exports = rounter;
