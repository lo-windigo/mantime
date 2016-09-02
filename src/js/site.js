
// Main views
var Index = React.createClass({
	render: function() {
		return <div>Man Time Podcast content</div>;
	}
});


var Episodes = React.createClass({
	render: function() {
		return <h1></h1>;
	}
});


var About = React.createClass({
	render: function() {
		return <div>Man Time Podcast content</div>;
	}
});


var Download = React.createClass({
	render: function() {
		return <div>Man Time Podcast content</div>;
	}
});


var Episode = React.createClass({
	render: function(episode) {
		return (
				<h1>{ episode.name }</h1>
				);
	}
});


// Smaller Components
var EpisodeSummary = React.createClass({
	render: function(episode) {
		return (
				<h1>{ episode.name }</h1>
				);
	}
});


ReactDOM.render(
	<Index>,
	document.getElementById('content')
);


// Establish routes
routie({
	'episodes': function() {
		ReactDOM.render(
			<Episodes>,
			document.getElementById('content')
		);
	},
	'about': function() {
		ReactDOM.render(
			<About>,
			document.getElementById('content')
		);
	},
	'download': function() {
		ReactDOM.render(
			<Download>,
			document.getElementById('content')
		);
	},
	'episode/?:episode': function(episode) {
		ReactDOM.render(
			<Episode episodeNumber=episode>,
			document.getElementById('content')
		);
	},
	'*': function() {
		ReactDOM.render(
			<Index>,
			document.getElementById('content')
		);
	}
});
