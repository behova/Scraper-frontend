import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/Sidebar";
import View from "./components/View";
import Feed from "./pages/feed";
import Landing from "./pages/landing";

function App() {
  const [query, setQuery] = useState<string>("");

  return (
    <div className="flex flex-col min-h-screen min-w-screen bg-stone-200">
      <SideBar setQuery={setQuery} query={query} />
      <View>
        <Routes>
          <Route path="/feed" element={<Feed query={query} />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </View>
    </div>
  );
}

export default App;
