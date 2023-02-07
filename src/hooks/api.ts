import axios from "axios";
import { AxiosError } from "axios";
import { DB_Image } from "../interfaces";

export async function fetchImagesByPage(page: number) {
  try {
    const axiosResponse = await axios.get<DB_Image[]>(
      `https://www.yuare.gay/${page}`
    );

    return axiosResponse;
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

async function fetchImageCount() {
  //need to implement total image count in api
  try {
    const axiosResponse = await axios.get<DB_Image[]>(`https://www.yuare.gay/`);

    return axiosResponse;
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
