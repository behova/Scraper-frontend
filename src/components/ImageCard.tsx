import cat from "../assets/cat.gif";
import { FaPlus } from "react-icons/fa";

interface Props {
  image?: string;
  name?: string;
}

const ImageCard: React.FC<Props> = ({ image, name }) => {
  return (
    <div className="max-w-sm flex flex-col overflow-hidden rounded-lg bg-stone-500 shadow">
      <img className="h-56 w-full object-cover" src={image} />

      <div className="flex flex-row space-x-3 px-6 py-4 bg-stone-800">
        <button
          type="button"
          className="py-2 px-4 text-sm font-medium 
          border border-transparent rounded-lg focus:outline-none 
          bg-stone-700 text-rose-300 hover:bg-rose-300 hover:text-rose-100"
        >
          <FaPlus size={20} />
        </button>
        <h4
          className="py-2 px-4 text-sm font-medium 
          border border-transparent rounded-lg focus:outline-none 
          bg-stone-700 text-rose-300"
        >
          {name}
        </h4>
        <h4
          className="py-2 px-4 text-sm font-medium 
          border border-transparent rounded-lg focus:outline-none 
          bg-stone-700 text-rose-300"
        >
          Size Here
        </h4>
      </div>
    </div>
  );
};

export default ImageCard;
