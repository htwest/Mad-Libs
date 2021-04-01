import React from 'react';
import MadLib from './MadLib';

function LibList({ retrievedLibs }) {
  return (
    <>
      {retrievedLibs.map((madlib, index) => (
        <MadLib key={index} lib={madlib.madlib}/>
      ))}
    </>
  )
}

export default LibList;