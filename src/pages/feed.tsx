import { IState } from "../interfaces";
import { useInfiniteQuery } from "@tanstack/react-query";
import fetchImages from "../hooks/fetchImages";
import ImageCard from "../components/ImageCard";
import { ApiPageResponse } from "../interfaces";
import { useInView } from "react-intersection-observer";
import React, { useState } from "react";
import whiteCat from "../assets/whiteCat.gif";
import LoadingCard from "../components/LoadingCard";
import ImageModal from "../components/ImageModal";

const Feed = (query: IState) => {
  const [showModal, setShowModal] = useState(false);
  const [modalSource, setModalSource] = useState("");

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

  const { ref, inView } = useInView();
  const handleOnClose = () => setShowModal(false);

  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (status === "loading")
    return (
      <LoadingCard
        image={whiteCat}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    );
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
            <div
              onClick={() => {
                setShowModal(true);
                setModalSource(
                  `https://www.yuare.gay/public/${image.thumbURL.substring(
                    image.thumbURL.lastIndexOf("/") + 1
                  )}`
                );
              }}
            >
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
            </div>
          ))}

        <div ref={ref} onClick={() => fetchNextPage()}>
          <LoadingCard
            image={whiteCat}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        </div>
        <ImageModal
          onClose={handleOnClose}
          visible={showModal}
          imageSource={modalSource}
        />
      </div>
    );
  } else return <h1>Something went wrong.... :(</h1>;
};

export default Feed;
