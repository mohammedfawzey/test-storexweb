import axios from "axios";
const baseURL = "https://test-api.storexweb.com/";
export default () => {
  return axios.create({ baseURL });
};
