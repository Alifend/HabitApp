const API = "https://habitapp-backend.herokuapp.com/users/";
import axios from "axios";
class userServices {
  register(params, uid) {
    axios.post(API + "registro/" + uid, params);
  }
  getUser(uid) {
    axios.get(API + uid);
  }
}

export default new userServices();
