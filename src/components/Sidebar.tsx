import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { IconType } from "react-icons/lib";
import cat from "../assets/paraniod.svg";

const SideBar = () => {
  return (
    <header className="sticky z-30 left-0 top-0 w-full bg-para-pink text-stone-100 shadow-lg rounded-3xl">
      <div className="flex flex-row justify-between align-middle">
        <div className="relative bg-para-pink pr-[60%]">
          <Link to="/feed">
            <img
              className="absolute top-0 h-full w-full object-cover"
              src={cat}
            />
          </Link>
        </div>

        <div className="flex items-center pr-5">
          <div className="flex border border-purple-200 rounded">
            <input
              type="text"
              className="block w-full px-4 py-2 text-para-pink bg-white border rounded-md focus:border-para-pink focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </header>
  );
};

interface SideBarIconProps {
  icon: ReactElement<IconType>;
  text?: string;
}

const SideBarIcon = ({ icon, text }: SideBarIconProps) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
