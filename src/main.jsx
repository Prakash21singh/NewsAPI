import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import News from "./News.jsx";
// Creating the basic Routing using react-router-dom
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/news/:newsId",
    element: <News />,
  },
]);

//Provider is for redux state and RouterProvider to wrap all the routes to navigate
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
