import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Component from './Components/Component';
import ComponentList from './Components/ComponentList';

function App(props) {
  const [specialVariable,Updatevaribale] = useState('')

 const items = [
  { 
    id:'job1',
    job:"web-developer",
    syntaxCode:'JavaScript',
    frameWorks:"react",
    dataBase:"MySQL",
},
{
  id:'job2', 
  job:"Back-end",
  syntaxCode:'Python',
  frameWorks:"Django",
  dataBase:"MangoDB",
},
{
  id:'job3',
  job:"Full-Stack",
  syntaxCode:'node.js',
  frameWorks:"Express",
  dataBase:"MangoDB",
},
{
  id:'job4',
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
