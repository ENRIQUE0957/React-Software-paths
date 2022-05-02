import React,{useState} from "react"
import './Component.css'

const Component = (props) =>{
    
    const[special,updateSpecial]= useState(false)
    
    const eventHandler = () => {
       updateSpecial(true)
       console.log("click")
    }

    const cancelHandler = () =>{
        updateSpecial(false)
    }
    return (
        
         <div className = "Softwarepath">
            
            {special&&<div className = "software-job">{props.job1}</div>}
            {special &&<div>{props.syntax}</div>}
            {special &&<div>{props.framework}</div>}
            {special&&<div>{props.database}</div>}
            {special&&<button type = "button" onClick = {cancelHandler}>Cancel</button>}
            {!special&&<button onClick= {eventHandler}>{props.job1}</button>}
         </div>

     
    )
}

export default Component;