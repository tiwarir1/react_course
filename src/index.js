import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list'

//go to console.developers.google.com and signup for a API credentials for youtube data API v3
//that is the API key included in this video
const API_KEY = 'AIzaSyC3y1WEhd8xs4Mcgeipj5iIp3yV4I1gKLo';
//npm install --save youtube-api-search  		installs a youtube search api to search for videos
//to use the api key, we'll need the npm package


// create new component. It should produce html
class App extends Component {
	constructor (props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'sacred games'}, (videos) => {
			this.setState({videos});
			//this can be written as (data) => {this.setState({videos: data})}
			//we wrote it like this because key({videos}) and the properties(video) are the same. It is an ES6 syntax
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos = {this.state.videos} />
			</div>
		);
	}
}


/// take this component's generated html and put it on the page (in DOM)
ReactDOM.render(<App />, document.querySelector('.container'));