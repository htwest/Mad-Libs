import React, { useState } from 'react';

import Word from './Word';

function LibBox() {
  return (
    < >
      <h3>Please Enter The Following</h3>
      <input type="text" placeholder="Enter Username" required/>
      <Word />
    </>
  )
}

export default LibBox;