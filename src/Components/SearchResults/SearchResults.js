import React from 'react';
import TrackList from 'src/Components/TrackList/TrackList.js';
import 'src/Components/SearchResults/SearchResults.css';
export class SearchResults extends React.Component {
    render(){
        return(
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResults}/>
            </div>
        );
    }
}