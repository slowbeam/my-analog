export default (state = [], action) => {
  switch (action.type) {
    case "SET_ANALOG_POSTS":
      return action.posts;
    default:
      return state;
  }
};
