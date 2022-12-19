import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navigation from "../../component/navigation/navigation";
import Footer from "../../component/footer/footer";
import EmailSub from "../../component/emailSub/emailSub.component";
import Recentblog from "../recentblog/recentblog";
import Tags from "../tags/tags";

import Grid from '../card/card.component';
import { TagBlogs } from './../../model/tagBlogs';

const Tagsearch = (props) => {

   const params = useParams();
   //console.log("tag title", params);
   let queryString = window.location.pathname.split('/');

   const { data, isLoading, error, postList } = TagBlogs();
   

   let allBlogsList = isLoading ? 'Loading...' :
      data?.posts.edges.map((blog, index) => {
         
         return (
            <Col md={6}>
               <Grid title={blog.node.title}
                  sourceUrl={blog.node.featuredImage.node.sourceUrl}
                  tags={blog.node.tags.edges}
               />
            </Col>
         )
      });



   return(
    <>
        <Row>
            <Navigation />
         </Row>
         <div className="container">
            <Row style={{ marginTop: "85px" }}>
               <h2 className="my-4"><i><u>Tag Result For {queryString[2]}</u></i></h2>
               <Col sm={10}>
                  <Row>
                     {allBlogsList}
                  </Row>
               </Col>
               <Col sm={4 - 2}>
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
         </div>
    </>
   )
}

export default Tagsearch;