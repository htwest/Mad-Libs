import React, { useState } from "react";

import Word from "./Word";

function LibBox({ wordObj, generateMadLib }) {
  return (
    <div>
      <h4 className="instructions">Fill Out The Following</h4>
      <input
        type="text"
        className="row m-1"
        placeholder="Enter Username"
        id="username"
        required
      />
      {Object.keys(wordObj).map((keyName, index) => (
        <Word key={index} wordType={keyName} />
      ))}
      <button
        type="button"
        className="row m-1 btn btn-outline-info"
        onClick={generateMadLib}
      >
        GO MAD!
      </button>
    </div>
  );
}

export default LibBox;
