import React from 'react';
import * as ReactBoostrap from 'react-bootstrap';
import logo from '../media/73visualize.jpg';
class Navbar extends React.Component {
    render(){
        return(
            <div className='Navbar'>
                <ReactBoostrap.Navbar bg='transparent' expand = 'sm'>
                    <ReactBoostrap.NavbarBrand>
                        <b>VISUALIZER</b>
                        <img src = {logo} 
                        width="35px"
                        height="35px"
                        alt='brandlogo'/>
                    </ReactBoostrap.NavbarBrand>
                    <ReactBoostrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <ReactBoostrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBoostrap.Nav className="mr-auto">
                    <ReactBoostrap.Nav.Link href="/">Home</ReactBoostrap.Nav.Link>
                    <ReactBoostrap.Nav.Link href="/about">About Us</ReactBoostrap.Nav.Link>
                    <ReactBoostrap.NavDropdown title='Choose Algorithm' id="basic-nav-dropdown">
                        <ReactBoostrap.NavDropdown.Item>Sorting</ReactBoostrap.NavDropdown.Item>
                        <ReactBoostrap.NavDropdown.Item>Searching</ReactBoostrap.NavDropdown.Item>
                        <ReactBoostrap.NavDropdown.Item>Path Finding</ReactBoostrap.NavDropdown.Item>

                        
                    </ReactBoostrap.NavDropdown>
                    
                    </ReactBoostrap.Nav>
                </ReactBoostrap.Navbar.Collapse>
                </ReactBoostrap.Navbar>
            </div>
        );
    }
}
export default Navbar;