import React, { Component } from "react";
import "./App.css";
import { Router, Route, Redirect } from "react-router-dom";
import PostsContainer from "./containers/PostsContainer";
import NavBar from "./components/NavBar";
import history from "./history";
import { connect } from "react-redux";
import * as actions from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchAnalogPosts();
  }

  countFavorites = () => {
    return this.props.favoritedPosts.length;
  };

  Home = () => {
    return (
      <React.Fragment>
        <NavBar favNum={this.countFavorites()} />
        <PostsContainer posts={this.props.analogPosts} favorites="no" />
      </React.Fragment>
    );
  };

  Favorites = () => {
    return (
      <React.Fragment>
        <NavBar favNum={this.countFavorites()} />
        <PostsContainer posts={this.props.favoritedPosts} favorites="yes" />
      </React.Fragment>
    );
  };

  RedirectHome = () => {
    return <Redirect to="/home" />;
  };

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <React.Fragment>
            <Route exact path="/" render={this.RedirectHome} />
            <Route exact path="/home" render={this.Home} />
            <Route exact path="/favorites" render={this.Favorites} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    analogPosts: state.analogPosts,
    favoritedPosts: state.favoritedPosts
  };
};

export default connect(
  mapStateToProps,
  actions
)(App);
