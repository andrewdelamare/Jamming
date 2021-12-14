import React from "react";
import './Tracklist.css';
import {Track} from '../Track/Track.js';
export class TrackList extends React.Component{
    constructor(props){
        super(props);
        this.showTracks = this.showTracks.bind(this);
    }
    showTracks(){
        let tracks = this.props.tracks;
        let trackList = tracks.map((track)=> <Track track={track} onAdd={this.props.onAdd}/>);
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