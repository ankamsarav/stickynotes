import React from "react"

const NoteTheme = ({note,themes,onSetTheme}) => (
    <div class="note-action note-action-theme">
        <i class="fa fa-cog note-action-theme-anchor" aria-hidden="true"></i>
        <div class="note-action-theme-overlay">
            <ul class="list-inline">
            {
                themes.map((value, index) => 
                <li 
                    key={index} 
                    class={`set-theme fa theme-${value} ${value==note.theme?'fa-check selected':''}`}
                    onClick={() => onSetTheme(note.id, value)}
                ></li>)
            }
            </ul>
        </div>
    </div>
)

export default NoteTheme