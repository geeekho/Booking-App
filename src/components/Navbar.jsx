import {
  GalleryHorizontal,
  Github,
  Laptop,
  Moon,
  Sun,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

import api from "@/api";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Separator,
} from "@/components/ui";
import { useAuth } from "@/hooks/useAuth";

import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const { token, setToken } = useAuth();
  const { setTheme } = useTheme();

  const handleSignOut = async () => {
    try {
      await api.post("/api/signout");

      setToken(null);
    } catch {
      setToken(null);
    }
  };

  return (
    <>
      <div className="sticky top-0 z-40 flex flex-row items-center justify-around gap-8 bg-background/80 px-8 py-4">
        <div className="flex-end flex flex-1 flex-row items-center justify-end gap-8">
          {token ? (
            <div className="flex flex-1 flex-row items-center justify-center gap-8">
              <Link to="/">Home</Link>
              <Link to="/favorites">Favorites</Link>
            </div>
          ) : null}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <User className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Profile</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Theme</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      <Sun className="mr-2 h-4 w-4" />
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      <Moon className="mr-2 h-4 w-4" />
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      <Laptop className="mr-2 h-4 w-4" />
                      System
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <Separator />
              <a
                href="https://github.com/geeekho"
                target="_blank"
                rel="noreferrer"
              >
                <DropdownMenuItem>
                  <Github className="mr-2 h-4 w-4" />
                  Github
                </DropdownMenuItem>
              </a>
              <a
                href="https://wajdi-sadouki.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <DropdownMenuItem>
                  <GalleryHorizontal className="mr-2 h-4 w-4" />
                  Portfolio
                </DropdownMenuItem>
              </a>
              <Separator />
              {token ? (
                <DropdownMenuItem onClick={handleSignOut}>
                  Sign Out
                </DropdownMenuItem>
              ) : null}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Navbar;
