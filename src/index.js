import _ from 'lodash';		//npm install --save lodash
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//go to console.developers.google.com and signup for a API credentials for youtube data API v3
//that is the API key included in this video
const API_KEY = 'AIzaSyC3y1WEhd8xs4Mcgeipj5iIp3yV4I1gKLo';
//npm install --save youtube-api-search  		installs a youtube search api to search for videos
//to use the api key, we'll need the npm package


// create new component. It should produce html
class App extends Component {
	constructor (props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('latest news');
	}

	videoSearch (term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			//This can also be written like this. since key:value is the same
			//it is a ES6 syntax
			//this.setState({videos});
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});

	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange = {videoSearch} />
				<VideoDetail video = {this.state.selectedVideo} />
				<VideoList 
					onVideoSelect = {
						selectedVideo => this.setState({selectedVideo})
					}
				videos = {this.state.videos} />
			</div>
		);
	}
}


/// take this component's generated html and put it on the page (in DOM)
ReactDOM.render(<App />, document.querySelector('.container'));