import { useState } from "react";
import SidebarToggle from "./components/icons/SidebarToggle";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
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
    <div className="w-96 h-screen bg-slate-500">
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
        <div className="h-96 bg-green-300 rounded-2xl shadow col-span-2 -translate-y-24 "></div>
        <div className="h-96 bg-red-400 rounded-2xl shadow col-span-5"></div>
        <div className="h-96 bg-blue-400 rounded-2xl shadow col-span-3"></div>
      </div>
    </div>
  );
}

export default App;
