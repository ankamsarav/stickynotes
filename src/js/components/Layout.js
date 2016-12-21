import React from "react"

import NoteList from "./NoteList"

require("./notes.scss");

export default class Layout extends React.Component {
  render() {
    return <div class="main-layout container">
      <header></header>
      <div class="row">
        <div class="col-xs-2"></div>
        <div class="col-xs-10"><NoteList /></div>
      </div>
    </div>
  }
}
