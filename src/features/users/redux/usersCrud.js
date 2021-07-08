import axios from "axios";

export const USERS_API = "https://jsonplaceholder.typicode.com/users";

// GET USERS =>  GET: get users from the server
export function getUsers() {
  return axios.get(USERS_API);
}
