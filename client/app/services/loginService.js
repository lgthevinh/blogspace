import axios from "axios";

import { SERVER_URL } from "@/config/config";

const login_user = async (email, password) => {
  try {
    console.log("Email: ", email);
    console.log("Password: ", password);
    const data = await axios.post(`${SERVER_URL}login`, {
      email: email,
      password: password,
    }, {
      headers: {"Content-Type": "application/json"},
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.error(error);
  } 
};

export default login_user;