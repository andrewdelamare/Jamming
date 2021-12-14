import React from "react";
import 'src/Components/TrackList/Tracklist.css';
export class TrackList extends React.Component{
    showTracks(){
        const tracks = this.props.tracks;
        const trackList = tracks.map((tracks)=> <li>{tracks}</li>);
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