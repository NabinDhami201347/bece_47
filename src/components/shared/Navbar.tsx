import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        <div className="fixed top-0 right-0 w-full h-full backdrop-blur-sm">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6"
          >
            ❌
          </button>
          <nav className="flex flex-col w-10/12 mx-auto items-center justify-center mt-10  divide-y-2">
            <a
              href="/"
              className=" w-full py-2  hover:text-pink-500 transition-colors ease-in-out"
            >
              Home
            </a>
            <a
              href="/database"
              className=" w-full py-2  hover:text-pink-500 transition-colors ease-in-out"
            >
              Database
            </a>
            <a
              href="/java"
              className=" w-full py-2  hover:text-pink-500 transition-colors ease-in-out"
            >
              Java Programming
            </a>
            <a
              href="/dotnet"
              className="w-full py-2  hover:text-pink-500 transition-colors ease-in-out"
            >
              Microsoft.NET
            </a>
            <ThemeToggle />
          </nav>
        </div>
      ) : (
        <button onClick={() => setOpen(true)}>🍔</button>
      )}
    </>
  );
};

export default Navbar;
