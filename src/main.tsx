import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import RoutesContainer from "./__Routes/RoutesContainer";

import "./index.css";
import Footer from "./components/Footer/Footer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <RoutesContainer />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
