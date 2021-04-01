import React, { useState } from 'react';

function Search({ searchForLibs }) {
  return (
    <form>
      <input type ="text" placeholder="Search By Username" id="searchUserName"/>
      <button type="button" onClick={searchForLibs}>Go!</button>
    </form>
  )
}

export default Search;