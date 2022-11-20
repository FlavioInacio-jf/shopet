import React from "react";

export default function lista(props){
    return (
    <div className="lista--conatiner">
        <h1 className="lista--title">{props.nome_produto}</h1>
        <p className="lista--quant">{props.quantidade}</p>
        <p className="lista--preco_custo">{props.preco_custo}</p>
        <p className="lista--preco_venda">{props.preco_venda}</p>
        </div>
    );
}