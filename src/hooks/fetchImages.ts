import { fetchSearch } from "../hooks/api";
import { fetchImagesByPage } from "../hooks/api";
import { IState } from "../interfaces";

const fetchImages = async (page: number, query?: IState) => {
  if (query && query.query != "") {
    const result = await fetchSearch(query.query);

    if (result) {
      return result;
      //this is throwing the wrong error here
    } else throw Error;
  } else {
    const result = await fetchImagesByPage(page);

    if (result) {
      return result;
      //this is throwing the wrong error here
    } else throw Error;
  }
};

export default fetchImages;
