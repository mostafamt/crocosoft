import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appbar from "./components/Appbar";
import Home from "./Pages/Home";
import NewQuizz from "./Pages/NewQuizz";
import { createStore } from "@reduxjs/toolkit";
import reducers from "./store/reducers";
import { Provider } from "react-redux";
import Questions from "./containers/Questions";

function App() {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new-quizz" element={<NewQuizz />}></Route>
          <Route path="/quizz/:id" element={<NewQuizz />}></Route>
          <Route path="/quizz/:id/questions" element={<Questions />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
