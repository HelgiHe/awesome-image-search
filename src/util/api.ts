import axios from "axios";
import { SearchResponse } from "./types";

const BASEURL = `https://content.googleapis.com/customsearch/v1`;
const SEARCH_ENGINE = "001361074102112665899%3Ap7mybnrloug";

export const fetchData = async (start: number, query: string) => {
  try {
    const response: SearchResponse = (
      await axios.get(
        `${BASEURL}?cx=${SEARCH_ENGINE}&q=${query}&searchType=image&key=${process.env.API_KEY}&start=${start}`
      )
    ).data;
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
