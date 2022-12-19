import { Container, Row, Col } from "react-bootstrap";
import BlogsPage from "../../component/card/card.component";
import Tags from "../../component/tags/tags";
import Recentblog from "../../component/recentblog/recentblog";
import Navigation from "../../component/navigation/navigation";
import './bloglist.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from "../../component/footer/footer";
import EmailSub from "../../component/emailSub/emailSub.component";
import { useState, createContext } from "react";
import BlogList from "../../component/blogList/blogList";

export const AppContext = createContext();

const Bloglist = (prop) => {
   return (
      <Container>
         <Row>
            <Navigation />
         </Row>
         <Row style={{ marginTop: "85px" }}>
            <Col md={10}>
               <BlogList />
            </Col>
            <Col>
               <Row>
                  <h2>Recent Post</h2>
                  <Recentblog />
               </Row>
               <Row>
                  <h2 className="tagclass">Tags</h2>
                  <Tags />
               </Row>
            </Col>
         </Row>
         <Row>
            <EmailSub />
         </Row>
         <hr />
         <Row>
            <Footer />
         </Row>
      </Container>
   )
}
export default Bloglist;