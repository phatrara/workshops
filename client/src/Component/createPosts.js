import {  ApolloClient,  InMemoryCache,  ApolloProvider,  useQuery,  gql } from "@apollo/client";

function CreatePost() {
    const createPosts = gql`
mutation createPosts {
  createPost(data: {title: "String", body: "String"}) {
    body
    title
    id
  }
}
`;

const { loading, error, data } = useQuery(createPosts);
if (loading) return <p>Loading...</p>;
if (error) return <p>Error :</p>;

return data.posts.unshift((posts)=>{
    
});

}  

export default CreatePost;
