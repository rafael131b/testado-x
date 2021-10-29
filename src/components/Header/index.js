import React from "react";
import styles from "./styles.css"

const Header=()=>{
    return <header>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" className="logo" alt="logo"></img>
        <ul className="MenuContent">
            <li>Smartphones</li>
            <li>Eletronicos</li>
            <li>Móveis</li>
            <li>Ofertas</li>
            
        </ul>
    </header>
}

export default Header;