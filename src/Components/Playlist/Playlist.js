import React from "react";


export class playlist extends React.Component{
    render(){
        return(
            <div class="Playlist">
                <input defaultValue={'New Playlist'}/>
                 {/* Add a TrackList component */}
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}
