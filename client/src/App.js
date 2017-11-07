import React, { Component } from "react";
import Nav from "./components/Nav/Nav"
import Jumbotron from ".components/Jumbotron";
import Search from ".components/Search";
import NYTResults from "./components/NYTResults";
import API from "./utils/API";
import { Saved, SavedArticle } from "./components/Saved";
import { Container, Row, Col } from "./components/Grid";




class App extends Component {
	state = {
		articles: [],
		articleSearch: ""
	};

	handleInputChange = event => {
		const {name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		API.getArticles(this.state.articleSearch)
		.then(res => this.setState({ articles: res.data }))
		.catch(err => console.log(err));
	};

	render() {
		return (
			<div>
			<Nav />
			<Jumbotron />
			<Container>
			<Row>
			<Col size="md-12">
			<form>
			<Container>
			<Row>
			<Input
				name="articleSearch"
				value={this.state.articleSearch}
				onChange={this.handleInputChange}
				placeholder="Search for an article topic..."
			/>
			<Col size="sx-3 sm-2">
			<Button
				onClick={this.handleFormSubmit}
				type="success"
				className="input-lg"
			>
			Search
			</Button>
			</Col>
			</Row>
			</Container>
			</form>
			</Col>
			</Row>
	
			);
	}
}

export default App;
