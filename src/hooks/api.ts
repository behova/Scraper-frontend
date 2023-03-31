import axios from "axios";
import { AxiosError } from "axios";
import { ApiPageResponse, ApiSearchResponse, DB_Image } from "../interfaces";

export async function fetchImagesByPage(page: number) {
  try {
    const axiosResponse = await axios.get<ApiPageResponse>(
      `https://www.yuare.gay/api/${page}`
    );
    const result = axiosResponse.data;

    return result;
  } catch (error: any | AxiosError) {
    if (error.response) {
      // Request made and server responded
      console.error(`Axios sharpProcess ${error.response.status}`);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Axios sharpProcess", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("createBuffer", error);
    }
  }
}

export async function fetchSearch(query: string) {
  //need to implement total image count in api
  try {
    const axiosResponse = await axios.post<ApiPageResponse>(
      "https://www.yuare.gay/api/search",
      { query }
    );

    const result = axiosResponse.data;

    return result;
  } catch (error: any | AxiosError) {
    if (error.response) {
      // Request made and server responded
      console.error(`Axios sharpProcess ${error.response.status}`);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Axios sharpProcess", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("createBuffer", error);
    }
  }
}
