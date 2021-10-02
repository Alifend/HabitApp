const API = "https://habitapp-backend.herokuapp.com/users/";
import axios from "axios";
class userServices {
  register(params) {
    axios.post(API + "registro", params);
  }
}

export default new userServices();
