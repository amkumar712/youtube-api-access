var React = require('react');
var VideoListItem = require('./video_list_item');

const VideoList = (props) => {

	//const videos = props.videos;

	const videosListItem = props.videos.map((video) => {
		console.log(props.onVideoSelect);
		return (
				<VideoListItem 
					onVideoSelect = {props.onVideoSelect}
					video={video} 
					key={video.etag} />
		);
	});

	return (
		<ul className='col-md-4 list-group'>
			{videosListItem}
		</ul>
	);
};

module.exports = VideoList;