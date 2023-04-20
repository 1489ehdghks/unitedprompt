


import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountSettingPage from "./page/accountSettingPage";
import InfoPage from './page/infoPage';
import NotFound from './page/notFoundPage';
import MainPage from './page/mainPage/mainPage';
import WritingPage from './page/WritingPage';
import LearnPage from './Theme/learner/page/learnPage';
import LearnWritingPage from './Theme/learner/page/learnWritingPage';
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/AccountSettingPage" element={<AccountSettingPage/>}></Route>
        <Route path="/InfoPage" element={<InfoPage/>}></Route>
        <Route path="/WritingPage" element={<WritingPage/>}></Route>
        <Route path="/LearnPage" element={<LearnPage/>}></Route>
        <Route path="/LearnWritingPage" element={<LearnWritingPage/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
