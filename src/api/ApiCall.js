import axios from "axios";
import { useDispatch } from "react-redux";

export const getNewsData = async function () {
  const options = {
    method: "GET",
    url: "https://newsapi90.p.rapidapi.com/topic/world",
    params: {
      language: "en-US",
      region: "US",
    },
    headers: {
      "x-rapidapi-key": "421ddf41f1msh4669b802681248ep161f9bjsn0c3f4b2216a4",
      "x-rapidapi-host": "newsapi90.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const getNewsDataById = async function (topidId) {
  const options = {
    method: "GET",
    url: "https://newsapi90.p.rapidapi.com/topic",
    params: {
      topicId: topidId,
      language: "en-US",
      region: "US",
    },
    headers: {
      "x-rapidapi-key": "421ddf41f1msh4669b802681248ep161f9bjsn0c3f4b2216a4",
      "x-rapidapi-host": "newsapi90.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
