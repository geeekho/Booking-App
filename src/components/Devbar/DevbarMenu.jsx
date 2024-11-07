import {
  GalleryHorizontal,
  Github,
  Laptop,
  Moon,
  Sun,
  User,
} from "lucide-react";

import { useTheme } from "@/components/ThemeProvider";
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
} from "@/components/ui";

const DevbarMenu = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <User className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <a href="https://github.com/geeekho" target="_blank" rel="noreferrer">
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DevbarMenu;
