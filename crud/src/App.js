import React, {useState, useEffect} from "react"
import axios from "axios"
import './App.css';

import Lista from "./componentes/lista";

const baseURL = "http://localhost:3001/api"

function App() {
  const [values, setValues] = useState()
  const [listProdutos, setListProdutos] = useState()
  console.log(listProdutos)

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

  useEffect(() => {
    axios.get("http://localhost:3001/api/buscarProdutos").then((response) => {
      setListProdutos(response.data)
    })
  }, [])

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
      
      {typeof listProdutos !== "undefined" && 
        listProdutos.map((value) => {
       return (
        <Lista 
        key={value.cod_produto} 
        listLista= {listProdutos} 
        setLista = {setListProdutos}
        cod_produto={value.cod_produto}
        nome_produto={value.nome_produto}
        quantidade={value.quantidade}
        preco_custo={value.preco_custo}
        preco_venda={value.preco_venda}>
        </Lista>
        )})}
      
    </div>
  );
}

export default App;