import React from "react";
import item1 from "./img/cel.jpg"
import item2 from "./img/tv.jpg"
import item3 from "./img/notebook.jpg"
import item4 from "./img/radio.jpg"
import styles from "./styles.css"

const items=[
    {foto:item1,nome:"celular",valor:1200},
    {foto:item2,nome:"tv",valor:1400},
    {foto:item3,nome:"notebook",valor:1500},
    {foto:item4,nome:"radio",valor:1600},
    {foto:item1,nome:"celular",valor:1200},
    {foto:item2,nome:"tv",valor:1400},
    {foto:item3,nome:"notebook",valor:1500},
    {foto:item4,nome:"radio",valor:1600}
    
]

const eletronicos=items.map((p,k)=>(
    <div className="cardProduto" id={k}>
      <div className="imdProdutoContent">
        <img src={p.foto} className="imgProduto" />
      </div>
      <div className="info">
         <p>{p.nome}</p>
        
        <p>{p.valor} R$</p>
      </div>
    </div>
))

const Produtos=()=>{
    return <div className="ContainerProdutos">
        {eletronicos}
    </div>
}

export default Produtos;