import axios from "axios";

const URL =  process.env.SERVER_URL || "http://127.0.0.1:8000/"

const login_user = async (email, password) => {
  try {
    const data = await axios.post(`${URL}login`, {
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