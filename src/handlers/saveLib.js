const axios = require('axios');

const saveLib = (madLib) => {
  axios.post('http://localhost:3000/lib', madLib)
  .then((res) => {
    console.log('Mad Lib Saved')
  })
  .catch((err) => {
    console.log(err);
  })
}

module.exports = saveLib;