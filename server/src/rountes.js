const { Router } = require("express");
const router = Router();

const produtoController = require("./controllers/produtoController.js");

router.get("/buscarProdutos", produtoController.buscarTodos);
router.get("/buscarProduto/:cod_produto", produtoController.buscarUm);
router.post("/inserirProduto", produtoController.inserir);
router.put("/alterarProduto/:cod_produto", produtoController.alterar);
router.delete("/excluirProduto/:cod_produto", produtoController.excluir);

module.exports = router;
