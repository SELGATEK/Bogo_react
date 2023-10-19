import axios from "axios";

export default axios.create({
  baseURL: "http://3.108.250.128:3000/v1", 
  headers: {
    "Content-type": "application/json"
  }
});