import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends Component {		//if you do not import {Component} in the top, you will write extends React.Component in this line
	constructor (props) {
		super(props);

		this.state = {term: ''};
	}

	render () {
		return (
			<div>
				<input
					value = {this.state.term} 
					onChange = {(event) => this.setState({term: event.target.value})} />
			</div>
			)
	}

	//It can be written as this too
	/*render() {
		return <input onChange = {this.onInputChange} />;
	}

	onInputChange (event) {
		console.log(event.target.value);
	}*/
}

export default SearchBar;
