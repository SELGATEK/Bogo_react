import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.0.13:3000/v1", 
  headers: {
    "Content-type": "application/json"
  }
});