import loadImage from "../assets/calicoCat.gif";

interface Props {
  image?: string;
  name?: string;
}

const ImageCard: React.FC<Props> = ({ image, name }) => {
  return (
    <div className="max-w-sm flex flex-col overflow-hidden rounded-lg bg-stone-500 shadow">
      <div className="relative bg-rose-200 pb-[80%]">
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
      </div>
      <div className="relative bg-stone-500 pb-[20%]">
        <div
          className="absolute top-0 h-full w-full flex
         bg-stone-800"
        >
          <h4
            className="w-full p-1
            text-sm font-medium 
          border border-transparent rounded-lg focus:outline-none 
          bg-stone-700 text-rose-300"
          >
            {name}
          </h4>
          <h4
            className="w-full p-1
            text-sm font-medium 
          border border-transparent rounded-lg focus:outline-none 
          bg-stone-700 text-rose-300"
          >
            1077x1080
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
