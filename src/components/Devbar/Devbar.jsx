import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

import { useTheme } from "@/components/ThemeProvider";
import { Button, Separator } from "@/components/ui";
import { env } from "@/lib/env";
import { getImageUrl } from "@/lib/utils/images";

import DevbarMenu from "./DevbarMenu";
import { Intro } from "./Intro";

const Devbar = ({ drawer }) => {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = drawer;

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative h-screen w-[700px] flex-col items-center overflow-auto bg-card ${
        isOpen ? "animate-openmenu" : "animate-closemenu"
      }`}
    >
      <div className="sticky left-0 top-0 z-50 flex flex-row items-center justify-between gap-4 bg-card p-4">
        <div className="flex flex-row items-center gap-3">
          <Link
            className="text-lg leading-5"
            to={env.BASE_URL}
            rel="noreferrer"
          >
            <img
              src={getImageUrl(theme === "dark" ? "logo.png" : "logo.png")}
              alt="logo"
              className="h-[40px]"
            />
          </Link>
          <div>
            <b>EazyBook - Book Smart, Live Easy</b>
            <br />
            <span className="text-sm text-muted-foreground">
              Demo Made by{" "}
              <a
                href="https://github.com/geeekho"
                target="_blank"
                rel="noreferrer"
              >
                <b>geeekho</b>
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          {/* <DevbarMenu /> */}
          <Button variant="outline" size="icon" onClick={toggleDrawer}>
            <Menu className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>
      </div>

      <Separator />

      <div className="p-4">
        <Intro />
      </div>
    </div>
  );
};

export default Devbar;
