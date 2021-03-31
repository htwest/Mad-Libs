const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '/../dist')));
app.use(express.json());

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});