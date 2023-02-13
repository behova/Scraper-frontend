import axios from "axios";
import { AxiosError } from "axios";
import { ApiPageResponse, ApiSearchResponse, DB_Image } from "../interfaces";

export async function fetchImagesByPage(page: number) {
  try {
    const axiosResponse = await axios.get<ApiPageResponse>(
      `https://www.yuare.gay/${page}`
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
    const axiosResponse = await axios.post<DB_Image[]>(
      "https://www.yuare.gay/search",
      { query }
    );
    let element: ApiPageResponse = { images: [], nextPage: undefined };

    for (let i in axiosResponse.data) {
      element.images.push(axiosResponse.data[i]);
    }

    const result = element;

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
