import React from "react"

export default class NoteTheme extends React.Component {
  render() {
    const self = this;
    const {note,themes} = this.props
    return <div class="note-action note-action-theme">
        <i class="fa fa-cog note-action-theme-anchor" aria-hidden="true"></i>
        <div class="note-action-theme-overlay">
            <ul class="list-inline">
            {
                themes.map((value, index) => 
                <li 
                    key={index} 
                    class={`set-theme fa theme-${value} ${value==note.theme?'fa-check selected':''}`}
                    onClick={self.props.onSetTheme.bind(self, note.id, value)}
                ></li>)
            }
            </ul>
        </div>
    </div>
  }
}