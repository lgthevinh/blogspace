import axios from "axios";

const URL =  process.env.SERVER_URL || process.env.API_URL || "http://localhost:3000/"

const login_user = async (email, password) => {
  try {
    console.log("Email: ", email);
    console.log("Password: ", password);
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