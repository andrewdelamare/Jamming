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
        {name: 'song', artist: 'noOne', album: 'blank', id: '01'}, 
        {name: 'song2', artist: 'no2', album: 'blank2', id: '02'}, 
        {name: 'song3', artist: 'no3', album: 'blank3', id: '03'}, 
        {name: 'song4', artist: 'no4', album: 'blank4', id: '04'}]
    };
    this.addTrack = this.addTrack.bind(this);
  }
  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }else{
      this.state.playlistTracks.push(track);
    }
  }
  render(){
  return (
    <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.state.playlistTracks}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}
