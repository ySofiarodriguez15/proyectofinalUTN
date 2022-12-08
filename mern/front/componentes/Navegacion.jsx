
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';



function Navegacion() {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">MERN 2022</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link clasName ="nav-link" to="Formulario">Formulario</Link>{/*OTRA MANERA DE LINKEAR */ }
                

            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Navegacion;