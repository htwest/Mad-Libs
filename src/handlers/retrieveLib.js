const axios = require('axios');

const retrieveLib = (cb) => {
  axios.get('http://localhost:3000/lib')
  .then((res) => {
    cb(res.data.madlib);
  })
  .catch((err) => {
    sendStatus(500);
    console.log(err);
  });
}

module.exports = retrieveLib;