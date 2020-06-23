const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graph/index');

const app = express();
app.use('/',graphqlHTTP({ schema , graphiql: true }));
app.listen(4000 , () => console.log('Running on port 4000'));