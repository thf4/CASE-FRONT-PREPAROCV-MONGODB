import axios from "axios";
axios.defaults.headers = {
  "Content-Type": "application/json",

  Authorization: "Beader " + sessionStorage.getItem("token"),
};

export default axios;
