import axios from "axios";

const URL =  process.env.SERVER_URL || "http://127.0.0.1:8000/"

const fetch_blogs = async () => {
  try {
    const data = await axios.get(`${URL}blogs`, {
      headers: {"Content-Type": "application/json"},
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.error(error);
  } 
};

export default fetch_blogs;