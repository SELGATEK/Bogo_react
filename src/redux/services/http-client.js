import axios from "axios";

 
const instance = axios.create({
  baseURL: "http://3.108.250.128:3000/v1", 
  headers: {
    'Content-type': 'application/json',
  },
});
 
const token = localStorage.getItem('token');
 
if (token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default instance;