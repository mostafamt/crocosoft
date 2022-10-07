import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appbar from "./components/Appbar";
import Home from "./Pages/Home";
import NewQuizz from "./Pages/NewQuizz";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new-quizz" element={<NewQuizz />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
