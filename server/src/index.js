const { ApolloServer } = require('apollo-server');
const { sequelize } = require('./database/sequelize'); // Corrected import path
const typeDefs = require('./graphql/schema'); // Corrected import path
const resolvers = require('./graphql/resolvers'); // Corrected import path

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
