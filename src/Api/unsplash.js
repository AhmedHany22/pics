import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: process.env.REACT_APP_UNSPLASH_KEY,
  },
});
