import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import { getNewsData } from "./api/ApiCall";
import { useEffect, useMemo, useState } from "react";
import { addData } from "./store/dataSlice";
import ReactPaginate from "react-paginate";
import Loader from "./components/Loader/Loader";

// The main Page
function App() {
  const dispatch = useDispatch();
  // Getting news and filter from the redux store initially both of them are empty
  const { news, filter } = useSelector((state) => state.data);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getNewsData()
      .then((data) => {
        if (Array.isArray(data)) {
          // Dispatching the upcoming news to the redux store
          dispatch(addData(data));
        } else {
          // Catching the error if it's not giving me news data in an Array format
          setError("API Limit has been exceeded try later");
        }
        setIsLoading(false);
      })
      // Handling the Api Error
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
        setError(
          "An error occurred while fetching news data. Please try again later."
        );
      });
  }, [dispatch]);

  // Filtering and pagination logic
  const filteredNews =
    news?.filter((data) =>
      data.title
        .replaceAll(" ", "")
        .toLowerCase()
        .includes(filter.toLowerCase())
    ) || [];

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredNews.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredNews.length / itemsPerPage);

  // Handling page change on click
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="bg-red-600 p-10 rounded-md font-medium text-black shadow-xl border-l-4 border-red-700 text-center">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full md:w-[90%] lg:w-[80%] mx-auto font-sans bg-white h-full">
      {/* Navbar Component where we're searching*/}
      <Navbar key={"filter"} />
      <div className="flex flex-wrap justify-center mt-10">
        <hr className="w-full mb-4" />
        {currentItems.length > 0 ? (
          currentItems.map((data) => (
            <Card
              key={data?.topicId}
              id={data?.topicId}
              image={data?.image}
              summary={data?.preview}
              title={data?.title}
              date={data?.date}
            />
          ))
        ) : (
          <p>No news available at this time.</p>
        )}
      </div>
      <div className="flex justify-center my-4 text-sm">
        {/* Using react paginate for the pagination */}
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex list-none"}
          pageClassName={"mx-1"}
          pageLinkClassName={
            "px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200"
          }
          previousLinkClassName={
            "px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200"
          }
          nextLinkClassName={
            "px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200"
          }
          activeLinkClassName={"bg-gray-300"}
        />
      </div>
    </div>
  );
}

export default App;
