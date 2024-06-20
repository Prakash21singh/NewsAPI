import React from "react";
import { useDispatch } from "react-redux";
import { addFilter } from "../../store/dataSlice";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className="my-2">
      <div className="max-w-md mx-auto transition-all w-72 md:min-w-96">
        <div className="relative flex items-center w-full h-12 rounded-sm focus-within:shadow-lg bg-zinc-400 overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 bg-zinc-100 px-2"
            type="text"
            id="search"
            placeholder="Search news..."
            // Dispatching or(setting) the filter value to the redux store
            onChange={(e) => {
              dispatch(addFilter(e.target.value));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
