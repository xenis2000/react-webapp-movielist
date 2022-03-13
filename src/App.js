import React, { Component } from "react";
import "./App.css";

import data from './data';

import Header from "./header/header";
import MovieList from './move-list/move-list';

class App extends Component {
    state = {
        movieData: data,
        helloMessage: "Movie App",
    };
    
    render() {
        // console.log(this.state.movieData.data);
        // return <div></div>;
        return (
        <div className="App">
            <Header headerMessage={this.state.helloMessage}/>
            <MovieList movieData={this.state.movieData.data} />
        </div>
        );
    }
}

export default App;
