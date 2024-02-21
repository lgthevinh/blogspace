import axios from "axios";

const URL =  process.env.SERVER_URL || 'https://blogspace-8vh5.onrender.com/';

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