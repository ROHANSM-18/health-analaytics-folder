// const { ApolloServer } = require('apollo-server');
// const { sequelize } = require('./src/database/sequelize'); // Corrected import path
// const typeDefs = require('./src/graphql/schema');
// const resolvers = require('./src/graphql/resolvers'); 
// require('./src/associations');


// const server = new ApolloServer({ typeDefs,resolvers});

// server.listen().then(({ url }) => {
//   console.log(`Server is running at ${url}`);
// });


const { ApolloServer } = require('apollo-server');
const { sequelize } = require('./src/database/sequelize'); // Corrected import path
const typeDefs = require('./src/graphql/schema');
const resolvers = require('./src/graphql/resolvers');

// Custom logging function
const logRequest = (req) => {
  console.log(`Received request: ${req.operationName}`);
};

const logError = (error) => {
  console.error('Error:', error);
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Log incoming requests
    logRequest(req);

    return {
      // Add other context data as needed
    };
  },
  formatError: (error) => {
    // Log errors
    logError(error);
    return error;
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`);
});


