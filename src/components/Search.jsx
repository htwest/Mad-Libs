import React, { useState } from "react";

function Search({ searchForLibs }) {
  return (
    <form className="input-group mb-3">
      <input
        type="text"
        className="form-control col-3"
        placeholder="Search By Username"
        id="searchUserName"
      />
      <button
        type="button"
        className="btn btn-outline-success btn-sm"
        onClick={searchForLibs}
      >
        Search
      </button>
    </form>
  );
}

export default Search;
