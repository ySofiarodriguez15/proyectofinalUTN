import React from 'react';
import { Card } from 'react-bootstrap';



const Character = ({character}) => {

    return (

        <div>

            <Card style={{ width: '18rem' }} />
            <Card.Img variant="top" src= {character.image} />
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                <span> Gender: {character.gender} </span>
                <span> Specie: {character.species}</span>
                </Card.Text>
                
            </Card.Body>
        
        
        </div>
    )
    }


export default Character;