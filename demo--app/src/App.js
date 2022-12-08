
import React, { useState, useEffect } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import Main from './componentes/Main.jsx'
import {Routes, Route, Link} from 'react-router-dom'




function App() {
    const [character, setCharacter] = useState ([]);
    useEffect (() => {
      fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())    
      .then (res => setCharacter(res.results))
    
    },[])

    const handleImprimir = () => {
      console.log(character);
    };

    return(
      <div>
        
        <Main character = {character} />
        <Button onClick = {handleImprimir} variant="success">Success</Button>
      
      
      </div>
    );

}




export default App;
