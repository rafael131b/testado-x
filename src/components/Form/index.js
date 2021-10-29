import React from "react";
import { useState } from "react/cjs/react.development";
import styles from "./styles.css"
import { createBrowserHistory } from "history"



const Form=()=>{
    const [dados,setDados]=useState("")
    const logradouro=dados.logradouro;
    const bairro=dados.bairro;
    const localidade=dados.localidade;
    const uf=dados.uf

    const submit=(evt)=>{
        evt.preventDefault();
    }
    const validation=()=>{
        const history = createBrowserHistory({
            basename: "/home"
          })
        const redirect=()=>{
            window.redirect = history.push
            return(
                
                window.redirect("/"),
                window.location.reload()
            )
        }
      
        
        if(logradouro &&bairro&&localidade&&uf==""){
            alert("Alguns campos faltam ser preenchido")
        }else if(logradouro &&bairro&&localidade&&uf!==""){
            redirect();
        }
        
    }

    const onBlurCep=(e)=>{
        
        const {value}=e.target;
        const cep=value?.replace(/[^0-9]/g,'')
        if(cep?.length!==8){
            return
        }
        fetch(`https://viacep.com.br/ws/${value}/json/`)
            .then((res)=>res.json())
            .then((data)=>setDados(data))
    }
    console.log(logradouro)
    return <form onSubmit={submit}>
        <div className="form-control-group">
        <label>CEP:</label>
        <input type="text" name="cep" onBlur={onBlurCep}></input>
        </div>
        
        <div className="form-control-group">
            <label>Logradouro</label>
            <input type="text" name="Logradouro" value={logradouro}></input>
        </div>

       

        <div  className="form-control-group">
            <label>bairro</label>
            <input type="text" name="bairro" value={bairro} required></input>
        </div>

        <div  className="form-control-group">
            <label>cidade</label>
            <input type="text" name="cidade" value={localidade} required></input>
        </div>

        <div  className="form-control-group">
            <label>uf</label>
            <input type="text" name="uf" value={uf} required></input>
        </div>
        <button type="submit" onClick={validation}>Enviar</button>
        </form>
}

export default Form;