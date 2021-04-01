const axios = require('axios');

const searchLibs = (userName, cb) => {
  axios.get(`http://localhost:3000/user/${userName}`)
  .then((res) => {
    cb(res.data);
  })
  .catch((err) => {
    sendStatus(500);
    console.log(err);
  });
}

module.exports = searchLibs;