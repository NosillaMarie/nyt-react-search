import React, { Component } from "react";
import Nav from "./components/Nav/Nav"
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Search from "./components/Search/Search";
import NYTResults from "./components/NYTResults/NYTResults";
import Input from "./components/Input/Input";
import API from "./utils/API";
import { Saved, SavedArticle } from "./components/Saved";
import { Container, Row, Col } from "./components/Grid";




class App extends Component {
    state = {
        articles: [],
        articleSearch: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
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
         <h1>This is working </h1>
         	<Nav />
         		<Jumbotron />
         		<form>
         		<h3>Search Topic</h3>
         				<Input
         					name="articleSearch"
         					value={this.state.articleSearch}
         					onChange={this.handleInputChange}
         					placeholder="Search for article topic..."/>
         		<h3>Start Year</h3>
         				<Input
         					name="articleSearch"
         					value={this.state.articleSearch}
         					onChange={this.handleInputChange}
         					placeholder="Start Year.."/>
         		<h3>End Year</h3>
         				<Input
         					name="articleSearch"
         					value={this.state.articleSearch}
         					onChange={this.handleInputChange}
         					placeholder="End Year..."/>
         					</form>
        </div>

    );
}
}

export default App;
