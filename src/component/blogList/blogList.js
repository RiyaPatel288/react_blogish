import { Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Grid from '../card/card.component';
import { AllBlogs } from './../../model/allBlogs';

const BlogList = (props) => {

    const { data, isLoading, error, postList } = AllBlogs();

    let allBlogsList = isLoading ? 'Loading...' :
        data?.posts.edges.map((blog, index) => {
            return (
                <Col md={6}>
                    <Grid title={blog.node.title}
                        sourceUrl={blog.node.featuredImage.node.sourceUrl}
                        tags={blog.node.tags.edges} />
                </Col>
            )
        });

    return (
        <div md={12}>
            <div className='row'>
                {allBlogsList}
            </div>
        </div>
    );
}

export default BlogList;