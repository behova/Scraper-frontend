import { useQuery } from "@tanstack/react-query";
import { fetchSearch } from "../hooks/api";
import { ApiSearchResponse } from "../interfaces";
import ImageCard from "../components/ImageCard";

const searchResults = (query: string) => {
  const getResults = async (queryKey: string) => {
    const result = await fetchSearch(queryKey);
    if (result) {
      return result;
      //this is throwing the wrong error here
    } else throw error;
  };

  const { isLoading, isError, data, error } = useQuery<
    ApiSearchResponse,
    Error
  >({
    queryKey: ["search", query],
    queryFn: () => getResults(query),
  });

  if (isLoading) return <h1>Loading....</h1>;
  if (isError) return <h1>{JSON.stringify(error)}</h1>;
  if (data) {
    return (
      <div
        className="
          w-full h-full grid grid-cols-fluid
          p-3
          gap-2
          bg-stone-200"
      >
        {data.images.map((image) => (
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
      </div>
    );
  } else return <h1>Something went wrong.... :(</h1>;
};
export default searchResults;
