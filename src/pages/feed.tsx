import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ImageCard from "../components/ImageCard";
import { fetchImagesByPage } from "../hooks/api";

const Feed = () => {
  const [pageTotal, setPageTotal] = useState(20);
  const [page, setPage] = useState(1);

  const { status, error, data, isPreviousData } = useQuery({
    queryKey: ["images", { page }],
    keepPreviousData: true,
    queryFn: () => fetchImagesByPage(page),
  });

  if (status === "loading") return <h1>Loading....</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;
  if (status === "success")
    return (
      <div
        className="min-h-full min-w-full
          p-6
          bg-stone-200"
      >
        {data?.data.map((image) => (
          <div>{image.name}</div>
        ))}

        {pageTotal > 0 && (
          <button
            onClick={() => {
              setPage(page + 1);
              setPageTotal(pageTotal - 1);
            }}
          >
            {" "}
            next{" "}
          </button>
        )}
        <ImageCard />
      </div>
    );
  else return <h1>Something went wrong.... :(</h1>;
};

export default Feed;
