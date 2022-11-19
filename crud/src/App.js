import React, {useState} from "react"
import axios from "axios"
import './App.css';

const baseURL = "http://localhost:3001/api"
function App() {
  const [values, setValues] = useState()

  const pegarInfo = (value) =>{
    setValues((prevValue) =>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  function createProduct() {
    let json = {}

    json.name = values.nome_produto;
    json.quantidade =values.quantidade;
    json.preco_custo =values.preco_custo;
    json.preco_venda =values.preco_venda;
    json.cod_produto = values.cod_produto;

    axios.post(`${baseURL}/inserirProduto`, json).then((response) => {
      console.log(response.data)
    });
  }

  return (
    <div className="app--container">
      <div className='register--container'>
        <h1 className='register--title'>Cadastro de Produtos</h1>

        <input type="text" name="nome_produto" placeholder='nome' className='register--input' onChange={pegarInfo}/>

        <input type="text" name="quantidade" placeholder='quantidade do estoque' className='register--input' onChange={pegarInfo}/>

        <input type="text" name="preco_custo" placeholder='preço de custo' className='register--input' onChange={pegarInfo}/>

        <input type="text" name="preco_venda" placeholder='preço de venda' className='register--input' onChange={pegarInfo}/>

        <input type="text" name="cod_produto" placeholder='código do produto' className='register--input' onChange={pegarInfo}/>

        <button className='register--button' onClick={createProduct} >Cadastrar Produto</button>
      </div>
      
    </div>
  );
}

export default App;