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
    }
}