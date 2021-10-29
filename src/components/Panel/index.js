import React from "react";
import styles from "./styles.css"



const Panel=(props)=>{
    return <section className="sectionPanel">
            {props.children}
            
         </section>
}

export default Panel;