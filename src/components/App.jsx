import React from 'react';

import LibBox from './LibBox';
import Search from './Search';

import getRandomLib from '../../handlers/getRandomLib';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      template: '',
    }

  }

  componentDidMount() {


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