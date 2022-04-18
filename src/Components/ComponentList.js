import React from "react";
import "./ComponentList.css"
import Component from "./Component";
const ComponentList = (props) =>{
    //Rendering the list dynamically 
    return (
        <div className="ListItems">
            {props.items.map((items) =><Component items = {props.items}/>)}

        </div>

        
    )
}

export default ComponentList;