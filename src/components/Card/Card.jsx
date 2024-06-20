import React, { memo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Card = memo(({ title, summary, image, id, date }) => {
  const navigate = useNavigate();
  // This is card for all the news
  return (
    <>
      <div className="p-4 max-w-sm">
        <div className="flex rounded-lg h-full dark:bg-zinc-300 bg-teal-400 p-8 cursor-pointer flex-col relative hover:bg-zinc-400 transition-all ">
          <div className="image">
            <img
              className="rounded-lg"
              src={
                image ||
                "https://assets3.cbsnewsstatic.com/hub/i/r/2024/06/18/0c479c42-efa9-4b82-9616-acb0829afe69/thumbnail/1200x630/ad3d48906df8525ff6bb2ed022fd6986/gettyimages-2157595865.jpg?v=5842509bb796a146f9b20d3e8b03dac6"
              }
              alt="Image"
            />
          </div>

          <div className="flex items-center mb-3">
            <h2 className="text-zinc-700 text-lg font-medium">
              {/* Displaying the date of publish */}
              D.O.P :- {`${new Date(date).getFullYear()}s` || "Date"}
            </h2>
          </div>
          <div className="flex items-center mb-3">
            <h2 className="text-zinc-700 text-lg font-medium">
              {/* This is title */}
              {title || "Title"}
            </h2>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <p className="leading-relaxed text-base text-zinc-700 ">
              {/* This is summary */}
              {summary || "Summary"}
            </p>
          </div>

          {/* On click we're navigating to the related news to this card */}
          {id ? (
            <button
              onClick={() => {
                navigate(`/news/${id}`);
              }}
              className="bg-zinc-950 transition-all p-3 rounded-sm text-white hover:bg-zinc-800">
              Learn More ...
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
});

export default Card;
