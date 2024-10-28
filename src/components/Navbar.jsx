import { Link } from "react-router-dom";

import { Separator } from "@/components/ui";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-40 flex flex-row justify-center gap-8 bg-background/80 px-8 py-4">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <Separator />
    </>
  );
};

export default Navbar;
