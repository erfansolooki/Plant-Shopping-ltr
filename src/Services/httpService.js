import axios from "axios";

axios.defaults.baseURL = "https://nodejs-post-app.herokuapp.com/api";

const http = {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
};

export default http;
