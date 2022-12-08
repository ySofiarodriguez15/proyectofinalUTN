
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Formulario() {
    return ( 

        <>
            <Form className="containerForm">
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="string" placeholder="ej: Susana" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="string" placeholder="Ej: González" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contanos un poco más</Form.Label>
                <Form.Control type="string" placeholder="Tu motivo de consulta" className ="placeMotivo" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Tu email para comunicarnos" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Listos?" />
            </Form.Group>
            <Button variant="success" type="Enviar" className ="botonFormulario">
                Enviar
            </Button>
            </Form>



        </>


            );
}


export default Formulario;