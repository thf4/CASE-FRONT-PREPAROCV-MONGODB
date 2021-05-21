import axios from "axios";

function Axios() {
  axios.defaults.headers = {
    "Content-Type": "application/json",

    Authorization: "Beader " + sessionStorage.getItem("token"),
  };
  return axios;
}

export default Axios;
