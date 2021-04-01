const parseLib = (madlib, cb) => {
  const regExp = /\(([^)]+)\)/;
  let wordObj = {};

  const splitLib = madlib.split(' ')

  for (var i = 0; i < splitLib.length; i++) {
    if (regExp.exec(splitLib[i])) {
      if (splitLib[i][splitLib[i].length -1] !== ')') {
        let newSplit = splitLib[i].substring(1, splitLib[i].length -2);
        wordObj[newSplit] = '';
      } else {
        let newSplit = splitLib[i].substring(1, splitLib[i].length -1);
        wordObj[newSplit] = '';
      }
    }
  }

  cb(wordObj);
};

module.exports = parseLib;