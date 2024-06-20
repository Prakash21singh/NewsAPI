import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getNewsDataById } from "./api/ApiCall";
import Card from "./components/Card/Card";
import Loader from "./components/Loader/Loader";

const News = () => {
  let { newsId } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    getNewsDataById(newsId)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {!data ? (
        <Loader />
      ) : (
        <div className="w-screen h-screen flex items-center flex-wrap justify-center bg-zinc-100 p-5">
          {data?.map((data) => (
            <Card
              key={Math.random() + new Date()}
              date={data?.date}
              image={data?.image}
              title={data?.title}
              summary={data?.preview}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default News;
