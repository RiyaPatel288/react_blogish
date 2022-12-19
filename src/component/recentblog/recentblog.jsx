import Row from 'react-bootstrap/Row';
import React from "react";
import './recentblog.css';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const FILMS_QUERYS = gql`
query GetPostsEdges {
    posts {
      edges {
        node {
         id
          title
         
        }
      }
    }
  }
`;


const Recentblog = () => {

  const { data, isLoading, error } = useQuery(FILMS_QUERYS);

  if (isLoading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
   //console.log("bloglist", data);

  
  const postList = data?.posts ? data.posts.edges.slice(0,4).map((node, index) => {  
      return (
        <div key={node.node.id}>
        <Link to={`/blog/${node.node.title}`} className="blogcard"><h6 className='title'>{node.node.title}</h6></Link>
        </div>
      )
    }) : 'Loading...';

  return (
    <Row>
      {postList}
    </Row>
  );
}


export default Recentblog;