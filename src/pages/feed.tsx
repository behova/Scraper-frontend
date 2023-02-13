import { useInfiniteQuery } from "@tanstack/react-query";
import ImageCard from "../components/ImageCard";
import { fetchImagesByPage } from "../hooks/api";
import { ApiPageResponse } from "../interfaces";
import { useInView } from "react-intersection-observer";
import React from "react";
import whiteCat from "../assets/whiteCat.gif";
import LoadingCard from "../components/LoadingCard";
import { fetchSearch } from "../hooks/api";

interface IState {
  query: string;
}

// add if to check for search query here? then pass back to ruse infinite
const Feed = (query: IState) => {
  const fetchImages = async (page: number, query?: IState) => {
    if (query && query.query != "") {
      console.log("query:", query.query);
      const result = await fetchSearch(query.query);
      if (result) {
        return result;
        //this is throwing the wrong error here
      } else throw error;
    } else {
      const result = await fetchImagesByPage(page);
      if (result) {
        return result;
        //this is throwing the wrong error here
      } else throw error;
    }
  };

  const { ref, inView } = useInView();

  const {
    status,
    error,
    data,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<ApiPageResponse, Error>({
    keepPreviousData: true,
    queryKey: ["infinite", "search", query],
    getNextPageParam: (prevData) => prevData.nextPage,
    queryFn: ({ pageParam = 1 }) => fetchImages(pageParam, query),
  });

  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (status === "loading") return <h1>Loading....</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;
  if (status === "success") {
    return (
      <div
        className="
          w-full h-full grid grid-cols-fluid
          p-3
          gap-2
          bg-stone-200"
      >
        {data.pages
          .flatMap((data) => data.images)
          .map((image) => (
            <ImageCard
              image={
                "https://www.yuare.gay/public/" +
                image.thumbURL.substring(image.thumbURL.lastIndexOf("/") + 1)
              }
              name={
                image.name.length < 10
                  ? image.name
                  : image.name.substring(0, 10) + "..."
              }
            />
          ))}

        <div ref={ref} onClick={() => fetchNextPage()}>
          <LoadingCard
            image={whiteCat}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        </div>
      </div>
    );
  } else return <h1>Something went wrong.... :(</h1>;
};

export default Feed;
