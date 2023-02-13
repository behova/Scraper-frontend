import { Link } from "react-router-dom";
import cat from "../assets/paraniod.svg";

interface IProps {
  query: string;
  setQuery(data: string): void;
}

const SideBar = (props: IProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setQuery(e.target.value);
  };

  return (
    <header className="sticky z-30 left-0 top-0 w-full bg-para-pink text-stone-100 shadow-lg">
      <div className="flex flex-row justify-between align-middle">
        <div className="relative bg-para-pink pr-[60%]">
          <Link to="/feed">
            <img
              className="absolute top-0 h-full w-full object-cover"
              src={cat}
            />
          </Link>
        </div>

        <div className="flex items-center p-3">
          <div className="flex border border-purple-200 rounded">
            <input
              type="text"
              className="block w-full px-4 py-2 text-para-pink bg-white border rounded-md 
              focus:border-para-pink focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search..."
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SideBar;
