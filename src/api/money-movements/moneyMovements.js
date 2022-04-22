import axios from "axios";

export default {
  async getMovements() {
    const resp = await axios.get("http://localhost:8081/money-movements");
    return resp;
  },
  async addMovement(data){
    const resp = await axios.post("http://localhost:8081/money-movements", data);
    return resp;
  }
};
