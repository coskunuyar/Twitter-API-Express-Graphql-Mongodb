const RootQuery = require('./root-query');
const { GraphQLSchema  } = require('graphql');

module.exports = new GraphQLSchema({
    query: RootQuery
});