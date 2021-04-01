import React, { useState } from 'react';

import Word from './Word';

function LibBox({ wordObj, generateMadLib }) {
  return (
    < >
      <h3>Please Enter The Following</h3>
      <input type="text" placeholder="Enter Username" id="username" required/>
      {Object.keys(wordObj).map((keyName, index) => (
        <Word key={index} wordType={keyName}/>
      ))}
      <button type="button" onClick={generateMadLib}>SUBMIT</button>
    </>
  )
}

export default LibBox;