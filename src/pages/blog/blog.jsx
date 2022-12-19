import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from "../../component/footer/footer";
import Navigation from "../../component/navigation/navigation";
import EmailSub from "../../component/emailSub/emailSub.component";
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { DiscussionEmbed } from 'disqus-react';
import './blog.css';
import Recentblog from '../../component/recentblog/recentblog';
import Tags from '../../component/tags/tags';

const FILMS_QUERY = gql`
query GetPostsEdges($title: String!) {
  posts(where:{title:$title}) {
    edges {
      node {
        id
        title
        date
        content
        featuredImage{
          node{
            id
            sourceUrl
          }
        }
        tags{
          edges{
            node{
              id
              name
            }
          }
        }
      }
    }
  }
}
`;

const Blog = () => {

  const params = useParams();
  const { loading, error, data } = useQuery(FILMS_QUERY, {
    variables: {
      "title": params.blogTitle
    }
  });

  // useEffect(() => {
  //   (function () { // DON'T EDIT BELOW THIS LINE
  //     var d = document, s = d.createElement('script');
  //     s.src = 'https://blogish-1.disqus.com/embed.js';
  //     s.setAttribute('data-timestamp', +new Date());
  //     (d.head || d.body).appendChild(s);
  //   })();
  // }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log("data-single", data);


  if (data.posts.edges.length === 0) return <h1>Ohhh shit! We are facing some errors right! [500]</h1>;


  const postList = data.posts.edges.map((node, index) => {
    let tags = [];
    tags = node.node.tags.edges.map((tag, tagIndex) => {
      return tag.node.name;
    });
    console.log("title", node.node.title);
    console.log("title2", data.posts.edges[0].node.title);


    return (
      <Container>
        <Row>
          <Navigation />
        </Row>

        <Row style={{ marginTop: "85px" }} key={node.node.id}>
          <Col sm={10}>
            {/* <div>{JSON.stringify(params)}</div> */}
            {/* <div>id:{data.post.title}</div> */}

            <Card className='cardsingleblock'>

              <Card.Body>
                <Card.Title >{node.node.title} || {tags.join(", ")}</Card.Title>

                <Card.Text className='cardsingleimage'><img src={node.node.featuredImage.node.sourceUrl}></img>
                </Card.Text>
                <Card.Text dangerouslySetInnerHTML={{ __html: node.node.content }} className="cardsingletext">
                </Card.Text>
              </Card.Body>
            </Card>
            <Row className='reviewcom'>
            <DiscussionEmbed shortname='example'
              config={
                {
                  url: '/blog/React%20Unit%20Test%20Handbook%20+%20Redux%20Testing%20Toolkit',
                  identifier: 'this.props.article.id',
                  title: 'Official React components to embed Disqus discussions and comments.. Latest version',
                  // language: 'en' //e.g. for Traditional Chinese (Taiwan)	
                }
              } />
              </Row>
          </Col>
          <Col>
               <Row>
                  <h2>Recent Post</h2>
                  
                  <Recentblog/>
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
    );


  });
  return (
    <Row>
      {postList}
    </Row>
  );
}
export default Blog;
