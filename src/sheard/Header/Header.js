import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import LeftSideNav from '../LeftSide/LeftSideNav';
import { FaProductHunt, FaUser } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = ()=>{
        logOut()
        .then( ()=>{})
        .then( error=> console.error(error) );
    }


    return (
        <div>
            <h2><FaProductHunt></FaProductHunt>  THE COURSE OF PYTHON</h2>
            <div>
            <Navbar collapseOnSelect className="mb-5 mt-3" expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to='/'>COURSE</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">FAQ</Nav.Link>
                        <Nav.Link href="#pricing">BLOG</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                        {
                                user?.uid ? 
                                <>
                                    <span>{user?.displayName}</span>
                                    <Button variant="light" onClick={handleLogOut}>Logout</Button>
                                </>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/register'>Register</Link>
                                </>
                        }
                        
                        
                        
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                           

                            {
                                user?.photoURL ?
                                <Image style={{height:'30px'}} roundedCircle src={user?.photoURL}></Image>
                                : <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>

            </div>
        </div>
    );
};

export default Header;