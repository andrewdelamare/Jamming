import React from 'react';
import './App.css';
import {Playlist} from '../Playlist/Playlist.js';
import {SearchBar} from '../SearchBar/SearchBar.js';
import {SearchResults} from '../SearchResults/SearchResults.js';

export class App extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      searchResults: [
      {name: 'song', artist: 'noOne', album: 'blank', id: '01'}, 
      {name: 'song2', artist: 'no2', album: 'blank2', id: '02'}, 
      {name: 'song3', artist: 'no3', album: 'blank3', id: '03'}, 
      {name: 'song4', artist: 'no4', album: 'blank4', id: '04'}],
      playlistName: 'fakesongs for no one',
      playlistTracks: [
        {name: 'song5', artist: 'no5', album: 'blank', id: '05'}, 
        {name: 'song6', artist: 'no6', album: 'blank', id: '06'}, 
        {name: 'song7', artist: 'no7', album: 'blank', id: '07'}, 
        {name: 'song8', artist: 'no8', album: 'blank', id: '08'}]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  addTrack(track){
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }else{
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
  }
  removeTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      let index = this.state.playlistTracks.findIndex(track);
      this.setState(this.playlistTracks.splice(index,1));
    }else{
      return;
    }
  }
  render(){
  return (
    <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}
