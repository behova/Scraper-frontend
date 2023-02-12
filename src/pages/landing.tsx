import { Link } from "react-router-dom";
import cat from "../assets/paraniod.svg";

const Landing = () => {
  return (
    <div className="h-screen  bg-stone-200">
      <div
        className="grid h-full place-items-center
       "
      >
        <h1 className="text-6xl font-mono">Welcome to yuare.gay!</h1>
        <div className="flex flex-col items-center justify-center">
          <p className="text-center">
            Please note that images are sourced from different sites, some of
            which contain
          </p>
          <p className="text-red-600">18+ and NSFW content</p>
          <button className="rounded-full bg-para-pink text-rose-100 mt-4">
            <Link to="/feed">
              <h1 className="p-2">Continue</h1>
            </Link>
          </button>
        </div>

        <img src={cat} className="h-1/12 w-1/6" />
      </div>
    </div>
  );
};

export default Landing;
