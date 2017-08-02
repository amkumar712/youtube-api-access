// import React from 'react';
// import ReactDOM from 'react-dom';
// import SearchBar from './components/search_bar';

var React = require('react');
var Component = React.Component;
var ReactDOM = require('react-dom');
var SearchBar = require('./components/search_bar');
var VideoList = require('./components/video_list');
var VideoDetail = require('./components/video_detail');
var YTSearch = require('youtube-api-search');


const API_KEY = 'AIzaSyAxUJH0q9Y86r0-pJyQJEyldLM6Di0P03Y';

//AIzaSyBvsQ3LXF-rgtMYBvRg_h25OxqQZzHsOuk

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			videos:[],
			selectedVideo: null
		};

		this.videoSearch('surfboards');
		
	}

	videoSearch(term) {

		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]

			}); // it is ES6.. it equals to this.setState({videos: videos})
		});

	}

	render() {
		return (
				<div>
					<SearchBar onVideoSearch={term => this.videoSearch(term)} />
					<VideoDetail 
						video = {this.state.selectedVideo} />
					<VideoList 
						onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
						videos={this.state.videos} />
				</div>
			);
	}

	
}

ReactDOM.render(<App />, document.querySelector('.container'));