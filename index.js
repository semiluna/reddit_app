const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const update = require('./routes/update_route.js');
const query = require('./routes/query_route.js');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoDB = 'mongodb://localhost:27017';

mongoose.connect(mongoDB, (err) => {
  console.log(err, 'done');
});

const db = mongoose.connection;
// console.log(db);

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/reddit', update);
app.use('/reddit', query);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
