import axios from "axios";

// CURRENTLY, THE SERVER_URL ENVIRONMENT VARIABLE IS NOT BEING USED, ONLY THE NEXT_PUBLIC_SERVER_URL ENVIRONMENT VARIABLE IS BEING USED
// I STILL DONT KNOW WHY :/
const URL =  process.env.SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL || "http://127.0.0.1:8000/"

export const fetch_blogs = async () => {
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

export const fetch_blog_by_id = async (id) => {
  try {
    const data = await axios.get(`${URL}blogs/${id}`, {
      headers: {"Content-Type": "application/json"},
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.error(error);
  } 
};

