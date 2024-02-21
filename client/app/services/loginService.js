import axios from "axios";

const SERVER_URL =  process.env.SERVER_URL || 'http://localhost:8080/';

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