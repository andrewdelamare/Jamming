import React from "react";
import 'src/Components/TrackList/Tracklist.css';
import Track from 'src/Components/Track/Track.js';
export class TrackList extends React.Component{
    constructor(props){
        super(props);
        this.showTracks = this.showTracks.bind(this);
    }
    showTracks(){
        let tracks = this.props.tracks;
        let trackList = tracks.map((track)=> <Track name={track.name} album={track.album} artist={track.artist} id={track.id}/>);
        return(
            <ul>{trackList}</ul>
        )
    }

    render(){
        return(
            <div className="TrackList">
                 {this.showTracks()}
            </div>
        );
    }
}