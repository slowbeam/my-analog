import { combineReducers } from "redux";
import analogPosts from "./analogPosts";
import favoritedPosts from "./favoritedPosts";

export default combineReducers({
  analogPosts,
  favoritedPosts
});
