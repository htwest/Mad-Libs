const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.static(path.join(__dirname, '/../dist')));
app.use(express.json());

const port = 3000;

// ROUTE IMPORTS
const libRouter = require('./routes/lib');
const usernameRouter = require('./routes/username');
// ROUTES

app.use('/lib', libRouter);
app.use('/user', usernameRouter);

// DATABASE AND SERVER CONNECTION
mongoose.connect('mongodb://localhost:27017/madlib', {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("We're connected");
  }
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
});




