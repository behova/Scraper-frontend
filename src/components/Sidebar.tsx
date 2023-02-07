import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { IconType } from "react-icons/lib";
import { FaTrash, FaRegEye, FaDownload, FaHome } from "react-icons/fa";
import cat from "../assets/cat.gif";

const SideBar = () => {
  return (
    <div className="top-0 left-0 h-screen w-20 flex-none flex flex-col bg-stone-800 text-stone-100 shadow-lg">
      <Link to="/">
        <img className="border-4 rounded-2xl border-rose-300" src={cat} />
      </Link>
      <Link to="/feed">
        <SideBarIcon icon={<FaHome size={28} />} text="Feed" />
      </Link>
      <Link to="/gallery">
        <SideBarIcon icon={<FaRegEye size={28} />} text="View Selected" />
      </Link>
      <SideBarIcon icon={<FaDownload size={28} />} text="Download Selected" />
      <SideBarIcon icon={<FaTrash size={28} />} text="Trash Selection" />
    </div>
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
