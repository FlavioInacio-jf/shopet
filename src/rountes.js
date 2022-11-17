const express = require('express')
const rounter = express.Router()

const produtoController = require('./controllers/produtoController.js')

rounter.get('/produtos', produtoController.buscarTodos)

module.exports = rounter;
