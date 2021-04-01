import React from 'react';

import LibBox from './LibBox';
import Search from './Search';

const retrieveLib = require('../handlers/retrieveLib');
const parseLib = require('../handlers/parseLib');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      template: '',
      libWords: {}
    }
    retrieveLib.bind(this);
    parseLib.bind(this);
  }

  componentDidMount() {
    retrieveLib((madlib) => {

      parseLib(madlib, (wordObj) => {

        this.setState({
          template: madlib,
          libWords: wordObj
        })
      })
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>MAD LIBS</h1>
          <Search />
        </div>
        <LibBox />
      </div>
    )
  }
}

export default App;