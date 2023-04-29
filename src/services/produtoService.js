const { error } = require('console')
const { alterar } = require('../controllers/produtoController')
const db = require('../db')

module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM produtos', (error, results) => {
                if(error) { rejeitado(error); return;}
                else {
                    aceito(results)
                }
            })
        })
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query("SELECT * FROM produtos WHERE codigo = ?", [codigo], (error, results) => {
                if(error) { rejeitado(error); return;}
                if(results.lenght > 0){
                    aceito(results[0])
                }else{
                    aceito(false)
                }
            })
        })
    },

    inserir: (nome_produto, quant_estoque, preco_custo, preco_venda) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO produtos (nome_produto, quant_estoque, preco_custo, preco_venda) VALUES (?, ?, ?, ?)' , [nome_produto, quant_estoque, preco_custo, preco_venda], (error, results) => {
                if(error) { rejeitado(error); return;}
                aceito(results.insertCodigo)
            })
        })
    },

    alterar: (cod_produto, nome_produto, quant_estoque, preco_custo, preco_venda) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('UPDATE produtos SET nome_produto = ?, quant_estoque = ?, preco_custo = ?, preco_venda = ? WHERE cod_produto = ?' , [nome_produto, quant_estoque, preco_custo, preco_venda, cod_produto], (error, results) => {
                if(error) { rejeitado(error); return;}
                aceito(results)
            })
        })
    },

    excluir: (cod_produto) =>{
        return new Promise((aceito, rejeitado) => {

            db.query('DELETE FROM produtos WHERE cod_produto = ? ', [cod_produto], (error, results) => {
                if(error) { rejeitado(error); return;}
                aceito(results)
            })
        })
    }

}