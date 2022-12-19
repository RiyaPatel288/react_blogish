import Card from 'react-bootstrap/Card';
import React from "react";
import { Link } from 'react-router-dom';
import './card.css';


const Grid = ({ title, tags, sourceUrl }) => {
  let finalTags = [];
  finalTags = tags.map((tags, index) => {
    return tags.node.name
  })
  return (
    <>
      <Card>
        <Card.Body>
          <Link to={`/blog/${title}`} className='blogcard'>
            <Card.Title>{title} || {finalTags.join(", ")}</Card.Title>
            {/* <Card.Title>{title}</Card.Title> */}
            <Card.Text className='cardlistimage'>
              <img src={sourceUrl} alt={title}></img>
            </Card.Text>
          </Link>
        </Card.Body>
      </Card>
    </>
  )
};
export default Grid;
