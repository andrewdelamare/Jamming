import React from 'react';
import './App.css';
import 'src/Components/Playlist/Playlist.js';
import 'src/Components/SearchBar/SearchBar.js';
import 'src/Components/SearchResults/SearchResults.js';

class App extends React.Component {
    constructor(props){
    super(props);
    this.state.searchResults = [
      {name: 'song', artist: 'noOne', album: 'blank', id: '01'}, 
      {name: 'song2', artist: 'no2', album: 'blank2', id: '02'}, 
      {name: 'song3', artist: 'no3', album: 'blank3', id: '03'}, 
      {name: 'song4', artist: 'no4', album: 'blank4', id: '04'}];
      
  }

  render(){
  return (
    <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* Add a SearchBar component */}
            <div className="App-playlist">
            {/* Add a SearchResults component */}
            {/* Add a Playlist component */}
          </div>
        </div>
      </div>
    );
  }
}
