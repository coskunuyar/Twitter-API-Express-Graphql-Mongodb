const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graph/index');
const mongoose = require('mongoose');
const { secretURL } = require('./secret');

mongoose.connect(secretURL , { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open',() => console.log('Connected to database.'));

const app = express();
app.use('/v1',graphqlHTTP({ schema , graphiql: true }));
app.listen(4000 , () => console.log('Running on port 4000'));