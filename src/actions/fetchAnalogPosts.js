import APIAdapter from "../apis/adapter";
import { setAnalogPosts } from "./analogPosts";

export const fetchAnalogPosts = () => {
  return dispatch => {
    APIAdapter.fetchAnalogPosts().then(posts => {
      dispatch(setAnalogPosts(posts.data.children));
    });
  };
};
