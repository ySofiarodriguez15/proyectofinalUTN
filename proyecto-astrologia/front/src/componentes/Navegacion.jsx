import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navegacion() {
    return ( 
    <>
    
        <div className="navbarcolor" >
        <Navbar bg="light" variant="light" >
            <Container className='fondo' >
            <Navbar.Brand href="/" className="me-auto">Home</Navbar.Brand>
            
                <Nav className="me-auto">
                    <Nav.Link href="About">Sobre nosotros</Nav.Link>
                    <Nav.Link href="Servicios">Servicios</Nav.Link>
                    <Nav.Link href="Donde">Donde nos encontramos</Nav.Link>
                    <Nav.Link href="Formulario">Consultas!</Nav.Link>
                </Nav>
            
            </Container>
        </Navbar>
        </div>
        
    </>
    );
}


export default Navegacion;