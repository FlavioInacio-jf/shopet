const produtoService = require('../services/produtoService');

module.exports = {
    buscarTodos: async(req, res) =>{
        let json = {Error: "", result: []}

        let produtos = await produtoService.buscarTodos()

        for(let i in produtos){
            json.result.push({
                cod_produto: produtos[i].cod_produto,
                descricao: produtos[i].nome_produto
            })
            
        }
        res.json(json)
    },

    buscarUm: async(req, res) =>{
        let json = {error: '', result: {}}

        let cod_produto = req.params.cod_produto
        let produdo = await produtoService.buscarUm(cod_produto)

        if(produdo){
            json.result = produdo
        }

        res.json(json)
    },

    inserir: async(req, res) =>{
        let json = {error: '', result: {}}

        let nome_produto = req.body.nome_produto
        let quant_estoque = req.body.quant_estoque
        let preco_custo = req.body.preco_custo
        let preco_venda = req.body.preco_venda

        if(nome_produto && quant_estoque && preco_custo && preco_venda){
            let produdocod_produto = await produtoService.inserir(nome_produto, quant_estoque, preco_custo, preco_venda)
            json.result = {
                cod_produto: produdocod_produto,
                nome_produto,
                quant_estoque,
                preco_custo,
                preco_venda
            }
        }else{
            json.error = 'Campos não enviados'
        }

        res.json(json)
    },

    alterar: async(req, res) =>{
        let json = {error: '', result: {}}

        let cod_produto = req.params.cod_produto
        let nome_produto = req.body.nome_produto
        let quant_estoque = req.body.quant_estoque
        let preco_custo = req.body.preco_custo
        let preco_venda = req.body.preco_venda

        if(cod_produto && nome_produto && quant_estoque && preco_custo && preco_venda){
           await produtoService.alterar(cod_produto, nome_produto, quant_estoque, preco_custo, preco_venda)
            json.result = {
                cod_produto,
                nome_produto,
                quant_estoque,
                preco_custo,
                preco_venda
            }
        }else{
            json.error = 'Campos não enviados'
        }

        res.json(json)
    }
}