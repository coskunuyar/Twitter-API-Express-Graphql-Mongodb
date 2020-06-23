const express = require('express');
const app = express();

app.use('/',(req,res) => res.json({message: "Hello World!"}));
app.listen(4000 , () => console.log('Running on port 4000'));