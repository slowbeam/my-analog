import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import PostCard from "../components/PostCard";
import uuid from "uuid";

class PostsContainer extends React.Component {
  renderAllPosts = postArr => {
    if (this.props.favorites === "yes" && postArr.length === 0) {
      return <div className="no-fav">no favorites yet. </div>;
    }

    if (postArr) {
      return postArr.map(post => (
        <PostCard
          key={uuid()}
          title={post.data.title}
          imgUrl={post.data.url}
          upvotes={post.data.ups}
          timeCreated={post.data.created}
          author={post.data.author}
          bullet={"\u2022"}
          favorite={this.props.favorites}
        />
      ));
    }
  };

  render() {
    return (
      <div className="posts-container">
        {this.renderAllPosts(this.props.posts)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    analogPosts: state.analogPosts
  };
};

export default connect(
  mapStateToProps,
  actions
)(PostsContainer);
