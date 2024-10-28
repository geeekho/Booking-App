import { Link } from "react-router-dom";

import api from "@/api";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Separator,
} from "@/components/ui";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const { setToken } = useAuth();

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
          <div className="flex flex-1 flex-row items-center justify-center gap-8">
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Link>Account</Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleSignOut}>
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Navbar;
