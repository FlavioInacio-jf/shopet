import React, {useState} from "react"
import Axios from "axios"
import './App.css';

function App() {
  const [values, setValues] = useState()

  const pegarInfo = (value) =>{
    setValues((prevValue) =>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const pegarInfoButt = () =>{
    Axios.post("http://localhost:3001/Api/inserirProduto", {
      nome: values.nome_produto,
      quantidade: values.quantidade,
      preco_custo: values.preco_custo,
      preco_venda: values.preco_venda,
      cod_produto: values.cod_produto
    }).then((response) =>{
      console.log(response)
    })
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

        <button className='register--button' onClick ={() => pegarInfoButt()} >Cadastrar Produto</button>
      </div>
      
    </div>
  );
}

export default App;
