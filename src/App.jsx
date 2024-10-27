import { Menu } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Devbar from "@/components/Devbar/Devbar";

import { Button } from "./components/ui";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className={`absolute inset-0 bottom-0 left-0 top-0 transform transition-colors ease-in-out ${isOpen ? "z-50 bg-black/80" : "-z-50"}`}
      >
        {isOpen ? <Devbar drawer={[isOpen, setIsOpen]} /> : null}
      </div>
      <div
        className={` relative h-svh overflow-hidden overflow-y-auto ${!isOpen ? "z-50" : ""}`}
      >
        <Button
          variant="outline"
          size="icon"
          className="fixed left-0 top-0 m-4 ml-0"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
