const produtoService = require('../services/produtoService');

module.exports = {
    buscarTodos: async(req, res) =>{
        let json = {Error: "", result: []}

        let produtos = await produtoService.buscarTodos()

        for(let i in produtos){
            json.result.push({
                codigo: produtos[i].cod_produto,
                descricao: produtos[i].nome_produto
            })
            
        }
        res.json(json)
    },

    buscarUm: async(req, res) =>{
        let json = {error: '', result: {}}

        let codigo = req.params.codigo
        let produdo = await produtoService.buscarUm(codigo)

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
            let produdoCodigo = await produtoService.inserir(nome_produto, quant_estoque, preco_custo, preco_venda)
            json.result = {
                codigo: produdoCodigo,
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