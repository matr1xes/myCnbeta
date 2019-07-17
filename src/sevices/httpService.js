import axios from "axios";

const apiEndpoint = `http://localhost:5000/api`;

const get = path => {
  return axios.get(`${apiEndpoint}/${path}`);
};

export default {
  get
};
