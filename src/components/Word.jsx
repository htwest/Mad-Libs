import React, { useState } from 'react';

function Word({ wordType }) {
  let type = wordType.substring(0, wordType.length - 2) || '';

  return (
     <input type="text" className="word" id={wordType} placeholder={type}/>
  )
}

export default Word;