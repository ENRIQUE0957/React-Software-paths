import React,{useState} from "react"
import './Component.css'

const Component = (props) =>{
    let itemsJob = props.items[0].job
    let [originalJob,UpdateJob]= useState(props.items[0].job)
    const evenHandler = () =>{
     UpdateJob('back-end-developer')
      
      
    }
    return (
        
         <div className = "Softwarepath">
            <div className = "software-job">{originalJob}</div>
            <div>{props.items[0].syntaxCode}</div>
            <div>{props.items[0].frameWorks}</div>
            <div>{props.items[0].dataBase}</div>
            <div>
                <button type="button" onClick = {evenHandler}>Change Job</button>
            </div>
         </div>

     
    )
}

export default Component;