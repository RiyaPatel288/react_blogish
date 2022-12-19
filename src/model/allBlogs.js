import { useQuery } from '@apollo/client';
import { GET_BLOGS } from "./queries/getBlogsQuery";


export const AllBlogs = () => {
    let tags = [];
    const { data, isLoading, error } = useQuery(GET_BLOGS);
    const postList = data?.posts.edges.map((node, index) => {
        node.node.tags.edges.map((tag, tagIndex) => {
            return tags.push(tag.node.name);
        });
    });

    let uniqueTags = [...new Set(tags)];
    //console.log(uniqueTags);

    return ({
        data,
        isLoading,
        error,
        uniqueTags,
        'postList': postList
    })
}