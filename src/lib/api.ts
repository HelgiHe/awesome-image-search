import axios from "axios";

const BASEURL = `https://content.googleapis.com/customsearch/v1`;
const SEARCH_ENGINE = "001361074102112665899%3Ap7mybnrloug";

export const fetchData = async (start: number) => {
  try {
    const response = (
      await axios.get(
        `${BASEURL}?cx=${SEARCH_ENGINE}&q=forritun&searchType=image&key=${process.env.API_KEY}&start=${start}`
      )
    ).data;
    return response;
  } catch (error) {
    return error;
  }
};
