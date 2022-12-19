import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import blogish_logo from '../../images/logo_blogish.png';
import './navigation.css'
import SearchNav from './search/search';
import Facebookcom from './facebook/facebook';
import Googlecom from './google/google';
import Instagramcom from './instagram/instagram';
import Twittercom from './twitter/twitter'
import {Link} from "react-router-dom";
const Navigation = () => {
    return (
        <>
            <Navbar variant="light" fixed="top" className='navbarbg'>
                <Container>
                    <Link to="/"><Nav className="nav1"><img src={blogish_logo} height="50px" /></Nav></Link>
                    <Nav> <SearchNav/></Nav>
                    <Nav>
                        <Googlecom/>
                        <Twittercom/>
                        <Instagramcom/>
                        <Facebookcom/>          
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default Navigation;
