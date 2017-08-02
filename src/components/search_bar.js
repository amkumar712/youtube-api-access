const React = require('react');
const Component = React.Component;

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = {term: ''};
	}

	render() {
		return (
			<div>
				<input 
				value={this.state.term}
				onChange = {event => this.onSearchChange(event.target.value)} />
			</div>
			
		);
		
	}

	onSearchChange(term) {

		this.setState({term});
		this.props.onVideoSearch(term);

	}
}

// const SearchBar = () => {
// 	return <input />;
// }

module.exports = SearchBar;
//export default SearchBar;
