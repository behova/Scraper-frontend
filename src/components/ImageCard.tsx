import { ReactElement, JSXElementConstructor, ReactFragment } from "react";
import loadImage from "../assets/calicoCat.gif";

interface Props {
  image?: string;
  name?: string;
  dimensions?: string;
  pallet?: string;
}

const ImageCard: React.FC<Props> = ({ image, name, dimensions, pallet }) => {
  //convert pallet string
  const palletString = pallet;
  let newPallet: string[][] = [];

  if (palletString) {
    let convertedArray = [];
    const palletArray = palletString.split(",");

    for (let i = 0; i < palletArray.length; i += 3) {
      const chunk = palletArray.slice(i, i + 3);
      convertedArray.push(chunk);
    }

    newPallet = convertedArray;
  }

  return (
    <div
      className="max-w-sm flex flex-col overflow-hidden rounded-lg bg-rose-200 shadow
    border-2 border-rose-200 hover:border-para-pink hover:ring-purple-300 hover:outline-none hover:ring hover:ring-opacity-40"
    >
      <div className="relative bg-rose-200 pb-[100%]">
        <div
          className="
          absolute top-0 h-full w-full object-cover
          animate-bounce
          text-center
          flex items-center justify-center"
          role="status"
        >
          &#127775; &#127775; &#127775;
        </div>
        <img
          className="absolute top-0 h-full w-full object-cover"
          src={image}
        />
        <div
          className="
          absolute top-0 h-full w-full object-cover
          opacity-0 hover:opacity-100 backdrop-blur-sm bg-opacity-30 bg-para-pink
          text-center
          flex-row items-center justify-center align-middle"
          role="status"
        >
          <div className="flex h-1/3 items-center justify-center">
            {newPallet.map((color) => (
              <div
                className="p-1 m-1"
                style={{ background: "rgb(" + color + ")" }}
              ></div>
            ))}
          </div>
          <div className="text-center h-1/3">
            [{dimensions?.replace(",", " x ")}]
          </div>
          <div>{name}</div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
