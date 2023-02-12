import {
  InfiniteData,
  QueryFunctionContext,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import ImageCard from "../components/ImageCard";
import { fetchImagesByPage } from "../hooks/api";
import { ApiPageResponse } from "../interfaces";
import { useInView } from "react-intersection-observer";
import React from "react";
import whiteCat from "../assets/whiteCat.gif";
import LoadingCard from "../components/LoadingCard";

const Feed = () => {
  const fetchImages = async (page: number) => {
    const result = await fetchImagesByPage(page);
    if (result) {
      return result;
    } else throw error;
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
    queryKey: ["infinite"],
    getNextPageParam: (prevData) => prevData.nextPage,
    queryFn: ({ pageParam = 1 }) => fetchImages(pageParam),
  });

  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (status === "loading") return <h1>Loading....</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;
  if (status === "success") {
    // console.log(hasNextPage, data);
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
        {/* <div className="flex flex-col">
          <button
            ref={ref}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            className="rounded-full bg-para-pink text-rose-100 mt-4 p-3 "
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load Newer"
              : "Nothing more to load"}
          </button>
          <img src={whiteCat} className="h-1/12" />
        </div> */}

        <div ref={ref} onClick={() => fetchNextPage()}>
          <LoadingCard
            image={whiteCat}
            status="loading"
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        </div>
      </div>
    );
  } else return <h1>Something went wrong.... :(</h1>;
};

export default Feed;
