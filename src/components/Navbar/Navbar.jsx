import React, { useState } from "react";
import Search from "../Search/Search";
import DropDown from "../../assets/Icons/DropDown";

const Navbar = ({ filters }) => {
  let [isClicked, setIsClicked] = useState(false);
  // We can add more thing to the navbar right now we're only using logo and Search Component
  return (
    <>
      <div className="w-[90%] bg-zinc-200 p-2 mx-auto mt-4 rounded-sm relative flex flex-col md:flex-row justify-between items-center md:w-[95%] lg:w-[92%]">
        <h3 className="text-2xl font-bold">Logo</h3>
        <Search />
      </div>
    </>
  );
};

export default Navbar;
