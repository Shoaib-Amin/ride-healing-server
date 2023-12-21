const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');


// import routes  
const driversRoutes = require('./routes/drivers')


const app = express();


// Define your GraphQL schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Root resolver
const root = {
  hello: () => 'Hello, GraphQL World!'
};



// Set up a route for GraphQL using express-graphql middleware
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable the GraphiQL interface for testing
}));
app.use(express.json());

app.use('/drivers', driversRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/graphql`);
});
