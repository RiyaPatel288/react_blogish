import Row from 'react-bootstrap/Row';
import React from "react";
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import Badge from 'react-bootstrap/Badge';
import { useParams } from "react-router-dom";

const FILMS_QUERY = gql`
query GetPostsEdges {
    posts {
      edges {
        node {
          tags {
            edges {
              node {
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


const Tags = () => {

  // const params = useParams();
  // console.log("tag title", params);

  const { data, isLoading, error } = useQuery(FILMS_QUERY);

  if (isLoading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  let tags = [];

  const postList = data?.posts.edges.map((node, index) => {
    node.node.tags.edges.map((tag, tagIndex) => {
      return tags.push(tag.node.name);
    });
  });

  let uniqueTags = [...new Set(tags)];
  //console.log(uniqueTags);

  return (
    <div>
      {
        uniqueTags.map((value, index) => {
          return (
            <Link to={`/tag/${value.replace(/#/, '')}`} className='tag'>
              <Badge bg="secondary">{value}</Badge>
            </Link>
          )
        })
      }
      {/* <Tag style={{ backgroundColor: "#F3F2FF" }}>
        <Link to={`/blog/${tags}`} className='tag'>{uniqueTags.join(", ")}</Link>
      </Tag> */}
    </div>
  )

}


export default Tags;