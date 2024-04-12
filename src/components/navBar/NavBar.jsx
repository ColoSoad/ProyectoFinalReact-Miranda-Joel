import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../navBar/NavBar.css';
import '../cartWidget/CartWidget.css';
import { CartWidget } from '../cartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
export const NavBar = () => (
    <>
        <Navbar expand="lg" className="bg-dark">
            <Container>
                <Navbar.Brand href="/">
                    <div className="logo">
                        <span className="brand">KLOT</span>
                        <span>HES</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Tienda" id="basic-nav-dropdown">
                            <NavDropdown.Item to="category/Remeras" as={NavLink}>
                                T-shirts
                            </NavDropdown.Item>
                            <NavDropdown.Item to="category/Pantalones" as={NavLink}>
                                Pants
                            </NavDropdown.Item>
                            <NavDropdown.Item to="category/zapatillas" as={NavLink}>
                                Sneakers
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item to="category/lentes" as={NavLink}>
                                Glasses
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link to="contacto" as={NavLink}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    </>
);
