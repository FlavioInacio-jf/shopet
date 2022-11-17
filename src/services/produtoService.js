const { error } = require('console')
const db = require('../db')

module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM produtos', (error, results) => {
                if(error) { rejeitado(error); return;}
                aceito(results)
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
    }

}