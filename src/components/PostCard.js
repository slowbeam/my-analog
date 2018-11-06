import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class PostCard extends React.Component {
  componentDidMount() {
    if (this.props && this.props.favorite === "no") {
      const postTitle = this.props.title;
      const foundPost = this.props.favoritedPosts.find(function(post) {
        return post.data.title === postTitle;
      });

      if (foundPost) {
        const likeButton = document.getElementById(foundPost.data.title);
        if (!likeButton.className.includes("liked")) {
          likeButton.classList.add("liked");
        }
      }
    }
  }

  renderButton = () => {
    if (this.props.favorite === "no") {
      return this.renderLikeButton();
    } else {
      return this.renderDeleteButton();
    }
  };

  renderDeleteButton = () => {
    if (this.props !== undefined) {
      return (
        <i
          id={this.props.title}
          onClick={this.handleDelete}
          className="trash alternate icon delete-button"
        />
      );
    }
  };

  renderLikeButton = () => {
    const foundPost = this.props.favoritedPosts.find(
      post => post.title === this.props.title
    );

    if (foundPost) {
      return (
        <i
          id={this.props.title}
          onClick={event =>
            this.handleLike(
              this.props.title,
              this.props.imgUrl,
              this.props.upvotes,
              this.props.timeCreated,
              this.props.author,
              event
            )
          }
          className="heart icon like-button liked"
        />
      );
    } else {
      return (
        <i
          id={this.props.title}
          onClick={event =>
            this.handleLike(
              this.props.title,
              this.props.imgUrl,
              this.props.upvotes,
              this.props.timeCreated,
              this.props.author,
              event
            )
          }
          className="heart icon like-button"
        />
      );
    }
  };

  renderDate = () => {
    const createdDate = new Date(this.props.timeCreated * 1000);

    const createdDateString =
      createdDate.getMonth() +
      1 +
      "/" +
      createdDate.getDate() +
      "/" +
      createdDate.getFullYear();

    const currentDate = new Date();

    const timeDiff = currentDate.getTime() - createdDate.getTime();
    const diffDays = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
    const diffHours = Math.floor(timeDiff / 1000 / 60 / 60);
    const diffMinutes = Math.floor(timeDiff / 1000 / 60);

    if (this.props.favorite === "yes") {
      return createdDateString;
    }
    if (this.props.timeCreated === "") {
      return "?";
    }
    if (diffDays > 7) {
      return createdDateString;
    }
    if (diffDays === 1) {
      return "a day ago";
    }
    if (diffDays < 1 && diffHours === 1) {
      return `1 hour ago`;
    }
    if (diffDays < 1 && diffHours > 1) {
      return `${diffHours}  hours ago`;
    }
    if (diffHours < 1 && diffMinutes > 1) {
      return `${diffMinutes} minutes ago`;
    }
    if (diffMinutes < 1) {
      return "now";
    }
  };

  renderImageError = event => {
    event.target.onerror = null;
    event.target.src =
      "https://www.desktopbackground.org/p/2014/01/09/698675_wallpaper-reddit_1920x1200_h.jpg";
  };

  handleLike = (title, imgUrl, upvotes, timeCreated, author, event) => {
    const likeButton = document.getElementById(event.target.id);

    const newFavorite = {
      data: {
        title: title,
        url: imgUrl,
        ups: upvotes,
        created: timeCreated,
        author: author
      }
    };

    if (!likeButton.className.includes("liked")) {
      this.props.addFavoritedPost(newFavorite);
      likeButton.classList.add("liked");
    } else if (likeButton.className.includes("liked")) {
      this.props.removeFavoritePost(newFavorite);
      likeButton.classList.remove("liked");
    }
  };

  handleDelete = event => {
    const postTitle = event.target.id;

    const foundPost = this.props.favoritedPosts.find(function(post) {
      return post.data.title === postTitle;
    });

    this.props.removeFavoritePost(foundPost);
  };

  render() {
    return (
      <div className="post-card-wrapper">
        {
          <img
            className="post-image"
            src={this.props.imgUrl}
            onError={this.renderImageError}
            alt="temp"
          />
        }
        <h1 className="post-title">{this.props.title}</h1>
        <div className="divider-wrapper">
          <div className="divider" />
        </div>
        <div className="post-info">
          <p>
            <i className="user icon" />
            {this.props.author}
          </p>
          <p className="bullet">{this.props.bullet}</p>
          <p>
            <i className="clock outline icon" />
            {this.renderDate()}
          </p>
          <p className="bullet">{this.props.bullet}</p>
          <p>
            <i className="bolt icon" />
            {this.props.upvotes}
          </p>
        </div>
        <div className="like-button-container">{this.renderButton()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    analogPosts: state.favoritedPosts,
    favoritedPosts: state.favoritedPosts
  };
};

export default connect(
  mapStateToProps,
  actions
)(PostCard);
