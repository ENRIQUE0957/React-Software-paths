import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Component from './Components/Component';
import ComponentList from './Components/ComponentList';

function App(props) {
  const [specialVariable,Updatevaribale] = useState('')

 const items = [
  { 
    job:"web-developer",
    syntaxCode:'JavaScript',
    frameWorks:"react",
    dataBase:"MySQL",
},
{
  
  job:"Back-end",
  syntaxCode:'Python',
  frameWorks:"Django",
  dataBase:"MangoDB",
},
{
  
  job:"Full-Stack",
  syntaxCode:'node.js',
  frameWorks:"Express",
  dataBase:"MangoDB",
},
{
  
  job:"mobile-developer",
  syntaxCode:'Linux',
  frameWorks:"Linux",
  dataBase:"Linux",
}


 ]
 
  return (
   <div>
     
    
    <ComponentList items = {items}/>
     
   </div>
  );
}

export default App;
