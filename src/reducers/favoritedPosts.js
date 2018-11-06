export default (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITED_POST":
      return [...state, action.post];
    case "REMOVE_FAVORITED_POST":
      const stateDup = [...state];
      const filteredState = stateDup.filter(
        post => post.data.title !== action.post.data.title
      );
      return filteredState;
    case "SET_FAVORITED_POSTS":
      return action.posts;
    default:
      return state;
  }
};
