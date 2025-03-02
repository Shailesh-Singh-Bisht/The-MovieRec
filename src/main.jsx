import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Import Redux Provider
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./Layout";
import {store} from "./redux/MovieStore"; // Import your Redux store
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> {/* Home page */}
      <Route path="about" element={<About />} /> {/* About page */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap with Redux Provider */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
