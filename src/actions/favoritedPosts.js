export const addFavoritedPost = post => {
  return {
    type: "ADD_FAVORITED_POST",
    post: post
  };
};

export const removeFavoritePost = post => {
  return {
    type: "REMOVE_FAVORITED_POST",
    post: post
  };
};

export const setFavoritedPosts = posts => {
  return {
    type: "SET_FAVORITED_POSTS",
    posts: posts
  };
};
