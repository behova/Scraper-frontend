interface Props {
  image?: string;
  status?: string;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
}

const LoadingCard: React.FC<Props> = ({
  image,
  status,
  hasNextPage,
  isFetchingNextPage,
}) => {
  return (
    <div
      className="max-w-sm flex flex-col overflow-hidden rounded-lg bg-para-pink text-rose-100
    shadow border hover:border-red-700 hover:ring-purple-300 hover:outline-none hover:ring hover:ring-opacity-40"
    >
      <div className="relative bg-para-pink pb-[80%]">
        <img
          className="absolute top-0 h-full w-full object-cover"
          src={image}
        />
      </div>
      <div className="relative bg-para-pink pb-[20%] flex justify-center border rounded-full">
        <button
          disabled={!hasNextPage || isFetchingNextPage}
          className="rounded-full bg-para-pink text-rose-100 absolute h-full text-center"
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load New"
            : "All out of images!"}
        </button>
      </div>
    </div>
  );
};

export default LoadingCard;
