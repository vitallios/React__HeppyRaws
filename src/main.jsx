import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import Header from "./section/Header/Header";
import Footer from "./section/Footer/Footer";
import Router from "./components/Router";

import "./assets/styles/global.css";
import "./assets/styles/menuBurger.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <section className="wrap">
      <BrowserRouter>
        <Header />
      <main className="main">
        <Router />
      </main>
        <Footer />
      </BrowserRouter>
    </section>
  </React.StrictMode>
);
