import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';

class NavbarDisplay extends Component {
    render(){
            const colorNav = {
                backgroundColor: "rgba(0, 0, 0, 1)"
              };
            return (
                <Navbar sticky="top" variant="dark" style={colorNav} collapseOnSelect expand="md">
                <Navbar.Brand href="home" >
                    <img
                        src="https://www.flaticon.com/svg/static/icons/svg/123/123470.svg"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Epic angie logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className= "m-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="quotes">Quotes</Nav.Link>
                        <Nav.Link href="books">Books</Nav.Link>
                        <Nav.Link href="reviews">Reviews</Nav.Link>
                        <Nav.Link href="contact-us">Collabration</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default NavbarDisplay;
