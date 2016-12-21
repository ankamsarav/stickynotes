import React from "react"

import {Button} from "react-bootstrap"

export default class Note extends React.Component {
  componentWillMount() {
    
  }
  render() {
    const self = this;
    const {note,themes} = this.props
    return <div class="note-wrapper col-xs-6 col-md-3 col-lg-3" data-key={note.id}>
        <div class={`note theme-${note.theme}`}>
            {note.title ? <div class="note-title">{note.title}</div>: ''}
            {
                note.list 
                ? <div class="note-text"><ul class="list-unstyled">{note.list.map((value, index) => <li key={`list_item_${index}`}><label><input type="checkbox" /><span>{value.text}</span></label></li> )}</ul></div> 
                : <div class="note-text">{note.content}</div>
            }
            <div class="note-actions">
                <div class="note-action note-action-theme">
                    <i class="fa fa-cog" aria-hidden="true"></i>
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
                <div class="note-action note-action-delete pull-right">
                    <button onClick={self.props.onDelete.bind(self, note.id)} class="btn-plain"><i class="fa fa-trash" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    </div>
  }
}