const API = "https://habitapp-backend.herokuapp.com/users/";
import axios from "axios";
class userServices {
  register(params, uid) {
    axios.post(API + "registro/" + uid, params);
  }
}

export default new userServices();
