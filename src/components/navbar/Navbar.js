
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


// custom styles
import './navbar.css';
import { Button } from 'react-bootstrap';

import { logo, fb, insta, linkedin } from '../../assets';
import { Link } from 'react-router-dom';

const SideNavbar = () => {
    return (
        <>
            <Navbar expand="lg" className='navbox'>
                <Container>
                    <Link to={'/'}>
                        <Navbar.Brand ><img className='logo' src={logo} alt='sideclic' /></Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav sideclic-nav">
                        <Nav className="ms-auto align-items-center sideclic-nav" >

                            <NavDropdown title="Nos services" id="basic-nav-dropdown" className='dropdown-title'>

                                <Link to={'/entrepreneur'} className='dropdown-item'>
                                    Site vitrine
                                </Link>

                                <Link to={'/social'} className='dropdown-item'>
                                    Social Media Management
                                </Link>

                                <Link to={'/strategy'} className='dropdown-item'>
                                    Stratégie marketing Digital
                                </Link>



                            </NavDropdown>
                            <Link to={'/mission'} className='clic-nav-link nav-link' >  Notre mission
                            </Link>




                            <Link to={'/contact'} className='clic-nav-link nav-link' ><Button className='contact-button'>Contact</Button> </Link>

                            <Nav.Link href="https://www.linkedin.com/company/sideclic/" target="_blank"><img src={linkedin} alt='linkedin' /></Nav.Link>
                            <Nav.Link href="https://www.facebook.com/sideclicsolutions" target="_blank">
                                <img src={fb} alt='facebook' /></Nav.Link>
                            <Nav.Link href="https://www.instagram.com/sideclic/
" target="_blank" ><img src={insta} alt='instagram' /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}

export default SideNavbar