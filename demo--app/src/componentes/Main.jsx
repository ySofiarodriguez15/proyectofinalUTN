import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Character from './Character';

function Main ({character}) {

    return(
        
            <Row>
                    {

                        character.map((character)=> (

                            <Col key = {character.id}>
                            
                            <Character character = {character}/> {/*aca la onda seria que character=profes*/}
                            
                            </Col>   


                        ))
}    

            </Row>

    );
}

export default Main;

