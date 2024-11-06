import { useEffect, useState } from "react";
import SidebarToggle from "./components/icons/SidebarToggle";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isDesktop === false) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isDesktop]);

  return (
    <div className="flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <MainContent />
    </div>
  );
};

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  if (!sidebarOpen) {
    return (
      <div className="fixed top-0 left-0">
        <div
          className="cursor-pointer hover:bg-slate-400"
          onClick={() => {
            setSidebarOpen((sidebarOpen) => !sidebarOpen);
          }}
        >
          <SidebarToggle />
        </div>
      </div>
    );
  }
  return (
    <div className="w-96 h-screen bg-slate-500 fixed md:relative">
      <div
        className="cursor-pointer"
        onClick={() => {
          setSidebarOpen((sidebarOpen) => !sidebarOpen);
        }}
      >
        <SidebarToggle />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="w-full">
      <div className="h-48 bg-black"></div>
      <div className="grid grid-cols-10 gap-8 p-8">
        <div className="h-96 bg-green-300 rounded-2xl shadow md:col-span-2 col-span-10 -translate-y-24 hidden md:block"></div>
        <div className="h-96 bg-red-400 rounded-2xl shadow md:col-span-5 col-span-10"></div>
        <div className="h-96 bg-blue-400 rounded-2xl shadow md:col-span-3 col-span-10"></div>
      </div>
    </div>
  );
}

export default App;
