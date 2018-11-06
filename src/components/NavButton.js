import React from "react";

class NavButton extends React.Component {
  renderClassName = () => {
    if (this.props.active === "yes") {
      return "nav-button active";
    } else {
      return "nav-button";
    }
  };

  renderIcon = () => {
    if (this.props.icon === "heart") {
      return <i className="heart icon" />;
    }
    if (this.props.icon === "alien") {
      return <i className="reddit alien icon" />;
    }
  };

  render() {
    return (
      <div
        onClick={this.props.handleClick}
        id={this.props.id}
        className={this.renderClassName()}
      >
        {this.renderIcon()}
        {this.props.buttonText}
      </div>
    );
  }
}

export default NavButton;
