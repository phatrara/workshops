import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  ApolloClient,  InMemoryCache,  ApolloProvider,  useQuery,  gql } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://api-ap-southeast-2.graphcms.com/v2/cl42fl2no430g01w63m0b5qz2/master',
  cache: new InMemoryCache()
});


function POST_QUERY() {
  
const QUERY = gql`
      {
        posts{
          id
          title
          body
        }
      }
`;
  const { loading, error, data } = useQuery(QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return data.posts.map(({ title, body,id }) => (
    <div key={id}>
      <p>
        {title}: {body}
      </p>
    </div>
  ));
}
// client
//   .query({
//     query: testQuery
//   })  .then(result => console.log(result));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  <POST_QUERY/>
  </React.StrictMode>
  </ApolloProvider>    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
