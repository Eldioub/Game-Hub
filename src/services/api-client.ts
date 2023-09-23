import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b3ad8e78b1864cb78310d9950b62fe38",
  },
});
