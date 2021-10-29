import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Panel from "../../components/Panel";
import Produtos from "../../components/Produtos";


const Home=()=>{
    return <>
        <Header></Header>
        
        <Panel>
            <Produtos></Produtos>
            
        </Panel>
        <Footer></Footer>
    </>
    
}


export default Home;