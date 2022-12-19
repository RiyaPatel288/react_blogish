import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css'
import Googlecom from '../navigation/google/google';
import Twittercom from '../navigation/twitter/twitter';
import Instagramcom from '../navigation/instagram/instagram';
import Facebookcom from '../navigation/facebook/facebook';
import Tags from "../../component/tags/tags";
import Recentblog from '../recentblog/recentblog';

const Footer = () => {
    return (
        <Container className="footerrow">
            <Row>
                <Col xs><b>Lastest Articales</b>
                    <Row style={{ marginTop: "20px" }}>
                        <Recentblog/>
                    </Row>
                    
                </Col>
                <Col xs><b>Tag Cloud</b>
                    <Row style={{ marginTop: "20px" }}>
                    <Tags />
                    </Row>
                </Col>
                <Col xs><b>Follow me</b>
                    <p style={{ marginTop: "20px" }} className="slogo"><Googlecom /><Twittercom /><Instagramcom /><Facebookcom /></p>
                </Col>
                <Col xs><b>DISCOVER US</b>
                    <Row className='address' style={{ marginTop: "20px" }}>A-38 SpiritVilla,gateway Road,Surat,Gujarat,India..</Row>
                    <Row>022-2388-4942 </Row>
                </Col>
            </Row>

            <hr />
            <Row>
                Copyright © 2021 All rights reserved.
            </Row>


        </Container>
    )
}
export default Footer;