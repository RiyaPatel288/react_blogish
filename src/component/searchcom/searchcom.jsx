import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navigation from "../../component/navigation/navigation";
import Footer from "../../component/footer/footer";
import EmailSub from "../../component/emailSub/emailSub.component";
import './searchpage.css';
import Recentblog from "../recentblog/recentblog";
import Tags from "../tags/tags";

import Grid from '../card/card.component';
import { SearchBlogs } from './../../model/searchBlogs';

const Searchcom = (props) => {

   const params = useParams();
   console.log("tag title", params);

   let queryString = window.location.pathname.split('/');

   const { data, isLoading, error, postList } = SearchBlogs();
   //console.log("search-data::", data);

   let allBlogsList = isLoading ? 'Loading...' :
      data?.posts.edges.map((blog, index) => {
         // console.log("hello from loop")
         return (
            <Col md={6}>
               <Grid title={blog.node.title}
                  sourceUrl={blog.node.featuredImage.node.sourceUrl}
                  tags={[]}
               />
            </Col>
         )
      });

   return (
      <>
         <Row>
            <Navigation />
         </Row>
         <div className="container">
            <Row style={{ marginTop: "85px" }}>
            
               <h4 className="my-4"><i><u>Search Result for  {queryString[2]} </u></i> </h4>
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
   );
}

export default Searchcom;