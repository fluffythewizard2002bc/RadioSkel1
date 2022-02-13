import axios from "axios";

let baseUrl =
  process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000/";

//development
//client: http://localhost:3000
//server: http://localhost:5000

//production
//client && server : https://NAME.herokuapp.come

console.log(baseUrl);

export default axios.create({
  baseURL: baseUrl,
});