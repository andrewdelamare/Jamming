import React from "react";
import TrackList from 'src/Components/TrackList/TrackList.js';
import 'src/Components/Playlist/Playlist.css';
export class Playlist extends React.Component{
    render(){
        return(
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                 <TrackList tracks={this.props.playlistTracks}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}
