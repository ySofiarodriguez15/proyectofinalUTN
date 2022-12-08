
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function Navegacion() {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">React-Router</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="Formulario">Formulario</Nav.Link>
                <Nav.Link href="About">About</Nav.Link>
                

            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Navegacion;