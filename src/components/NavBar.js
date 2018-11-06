import React from "react";
import NavButton from "./NavButton";
import { withRouter } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    active: "home"
  };

  componentDidMount() {
    const location = window.location.href;
    const currentPage = location.split("/").pop();
    this.setState({
      active: currentPage
    });
  }

  handleClick = id => {
    if (this.state.active !== id) {
      this.setState({
        active: id
      });
    }
    this.props.history.push("/" + id);
  };

  renderActive = buttonId => {
    if (this.state.active === buttonId) {
      return "yes";
    } else {
      return "no";
    }
  };

  renderFavText = () => {
    return `favorites(${this.props.favNum})`;
  };

  render() {
    return (
      <div className="nav-bar-container">
        <NavButton
          handleClick={() => this.handleClick("home")}
          active={this.renderActive("home")}
          id="home"
          icon="alien"
          buttonText="/r/analog"
        />
        <NavButton
          handleClick={() => this.handleClick("favorites")}
          active={this.renderActive("favorites")}
          id="favorites"
          icon="heart"
          buttonText={this.renderFavText()}
        />
      </div>
    );
  }
}

export default withRouter(NavBar);
