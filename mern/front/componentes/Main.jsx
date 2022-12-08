import axios from 'axios';
import { useState, useEffect } from 'react';   
import ListGroup from 'react-bootstrap/ListGroup';


const Main = () => {
    {/*aca metemos los hooks*/}

    const [personas, setPersonas] = useState([]);
    useEffect(()=>{
        {/*para qe haga un get*/}

        const getPersonas = async () => {
            const data = axios.get('http://localhost:9000')
            setPersonas(data.personas)
        }

        getPersonas()


    },[])






    return(
        <div>

            <ListGroup variant="flush">{
                personas.map(persona => (
            
            <ListGroup.Item>
                {`${personas.nombre} - ${persona.apellido} - ${persona.dni}`}
            </ListGroup.Item>
            ))}
            </ListGroup>


        </div>
    )

}




export default = Main