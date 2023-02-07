import {
  InfiniteData,
  QueryFunctionContext,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { useState } from "react";
import ImageCard from "../components/ImageCard";
import { fetchImagesByPage } from "../hooks/api";
import { ApiPageResponse } from "../interfaces";

const Feed = () => {
  const [pageTotal, setPageTotal] = useState(20);
  const [page, setPage] = useState(1);

  const fetchImages = async (page: number) => {
    const result = await fetchImagesByPage(page);
    if (result) {
      return result;
    } else throw error;
  };

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
    getNextPageParam: (lastPage) => lastPage.nextPage,
    queryFn: ({ pageParam = 1 }) => fetchImages(pageParam),
  });

  if (status === "loading") return <h1>Loading....</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;
  if (status === "success") {
    // console.log(hasNextPage, data);
    return (
      <div
        className="min-h-full min-w-full
          p-6
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
            />
          ))}

        {hasNextPage && (
          <button onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "Loading.." : "Load More"}
          </button>
        )}
      </div>
    );
  } else return <h1>Something went wrong.... :(</h1>;
};

export default Feed;
