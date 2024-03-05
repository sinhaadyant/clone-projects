import axios from "axios";
const BASEURL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: `/search`,
  params: {
    maxResults: "50",
    order: "date",
  },
  headers: {
    "X-RapidAPI-Key": "44a9daaa4fmsh0376149a758928ep10408bjsn071653bf880f",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASEURL}/${url}`, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
