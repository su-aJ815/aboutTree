import React from "react";
import "./App.css";
import Header from "./components/Header";
import { MainPage } from "./pages/mainpage";
import { SubPage } from "./pages/subpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <SubPage />
    </div>
  );
}

export default App;
