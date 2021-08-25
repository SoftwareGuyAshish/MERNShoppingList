import React, {Component} from "react";
import {
    Collapse,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    NavbarBrand,
    NavbarToggler,
    Container
}
from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return(
            <div>
                <Navbar color="dark" dark className="mb-5" expand="sm">
                    <Container>
                        <NavbarBrand href="/">Shopping List</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://softwareguyashish.github.io/WildlifeGallery/">Wildlife Gallery</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }       
};

export default AppNavbar;