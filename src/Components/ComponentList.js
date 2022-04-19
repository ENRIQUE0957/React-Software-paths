import React from "react";
import "./ComponentList.css"
import Component from "./Component";
const ComponentList = (props) =>{
    //Rendering the list dynamically 
    return (
        <div className="ListItems">
            {props.items.map((items) =><Component  key = {items.job} job1 = {items.job} syntax = {items.syntaxCode} framework = {items.frameWorks} database = {items.dataBase} />)}

        </div>

        
    )
}

export default ComponentList;