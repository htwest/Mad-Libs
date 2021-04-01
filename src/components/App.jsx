import React from "react";

import LibBox from "./LibBox";
import Search from "./Search";
import MadLib from "./MadLib";
import LibList from "./LibList";

const retrieveLib = require("../handlers/retrieveLib");
const parseLib = require("../handlers/parseLib");
const saveLib = require("../handlers/saveLib");
const searhLibs = require("../handlers/searchLibs");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      template: "",
      libWords: {},
      retrievedLibs: [],
      libVisible: false,
      wordVisible: true,
      retrievedVisible: false,
    };
    retrieveLib.bind(this);
    parseLib.bind(this);
  }

  componentDidMount() {
    retrieveLib((madlib) => {
      parseLib(madlib, (wordObj) => {
        this.setState({
          template: madlib,
          libWords: wordObj,
        });
      });
    });
  }

  generateMadLib() {
    const words = document.getElementsByClassName("word");
    const userName = document.getElementById("username").value;

    let newWords = this.state.libWords;

    for (let i = 0; i < words.length; i++) {
      let id = words[i].id;
      let value = document.getElementById(id).value;
      newWords[id] = value;
    }

    let lib = this.state.template.split(" ");
    for (const key in newWords) {
      let wordType = `(${key})`;

      for (let i = 0; i < lib.length; i++) {
        if (lib[i] === wordType) {
          lib[i] = newWords[key];
        }
        if (lib[i].substring(0, lib[i].length - 1) === wordType) {
          let punct = lib[i].substring(lib[i].length - 1, lib[i].length);
          const fullWord = newWords[key] + punct;
          lib[i] = fullWord;
        }
      }
    }

    lib = lib.join(" ");

    const dataObj = {
      username: userName,
      madlib: lib,
    };

    saveLib(dataObj);

    this.setState({
      template: lib,
      libWords: newWords,
      libVisible: true,
      wordVisible: false,
    });
  }

  searchForLibs() {
    const userName = document.getElementById("searchUserName").value;
    searhLibs(userName, (data) => {
      this.setState({
        retrievedLibs: data,
        libVisible: false,
        wordVisible: false,
        retrievedVisible: true,
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="col-sm title">MAD LIBS</h1>
          <Search
            className="col-sm"
            searchForLibs={this.searchForLibs.bind(this)}
          />
        </div>
        {this.state.retrievedVisible ? (
          <LibList retrievedLibs={this.state.retrievedLibs} />
        ) : null}
        {this.state.libVisible ? <MadLib lib={this.state.template} /> : null}
        {this.state.wordVisible ? (
          <LibBox
            wordObj={this.state.libWords}
            generateMadLib={this.generateMadLib.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
