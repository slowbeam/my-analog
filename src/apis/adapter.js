const R_ANALOG_URL = "https://www.reddit.com/r/analog/top/.json";

export default class APIAdapter {
  static fetchAnalogPosts() {
    return fetch(R_ANALOG_URL).then(resp => resp.json());
  }
}
