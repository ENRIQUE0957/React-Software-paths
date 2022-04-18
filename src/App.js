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
  
  job:"web-developer",
  syntaxCode:'JavaScript',
  frameWorks:"react",
  dataBase:"MySQL",
},
{
  
  job:"web-developer",
  syntaxCode:'JavaScript',
  frameWorks:"react",
  dataBase:"MySQL",
},
{
  
  job:"web-developer",
  syntaxCode:'JavaScript',
  frameWorks:"react",
  dataBase:"MySQL",
}


 ]
 
  return (
   <div>
     
    
    <ComponentList items = {items}/>
     
   </div>
  );
}

export default App;
