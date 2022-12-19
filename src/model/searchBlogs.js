import { useQuery } from '@apollo/client';
import { GET_ALBUMS } from "./queries/getBlogsQuery";
import { useParams } from "react-router-dom";

export const SearchBlogs = () => {
    
    const { query } = useParams();
    //console.log("query", query);
    
    const { data, isLoading, error } = useQuery(GET_ALBUMS,{
        variables: {
          "albumsInput": query
        }
      });
      //let tags = [];
      const postList = data?.posts.edges.map((node, index) => {
        // const tags = node.node.tags.edges.map((tag, tagIndex) => {
        //     return tag.node.name;
        // });
    });

    return ({
        data,
        isLoading,
        error,
        'postList': postList
    })
}