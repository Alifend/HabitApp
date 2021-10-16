const API = "https://habitapp-backend.herokuapp.com/users/";
import axios from "axios";
class taskServices {
  postTask(params, uid) {
    console.log(API + uid + "/task");
    console.log(params);
    return axios.post(API + uid + "/task", params);
  }
  editTask(params, uid, id) {
    axios.put(API + uid + "/task/" + id, params);
  }
  deleteTask(uid, id) {
    axios.delete(API + uid + "/task/" + id);
  }

  getTasks(id) {
    return axios.get(API + id + "/tasks");
  }
}

export default new taskServices();
