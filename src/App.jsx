
import { useState } from 'react';
import SideMenu from './menu/sideMenu';
import { FcMenu, FcCancel } from "react-icons/fc";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from './menu/topMenu';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountSettingPage from "./page/accountSettingPage";
import InfoPage from './page/infoPage';
import NotFound from './page/notFoundPage';
import MainPage from './page/mainPage/mainPage';
import WritingPage from './page/WritingPage';
import LearnPage from './Theme/learner/page/learnPage';


function App() {
    const [visible,setVisible]=useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/AccountSettingPage" element={<AccountSettingPage/>}></Route>
        <Route path="/InfoPage" element={<InfoPage/>}></Route>
        <Route path="/WritingPage" element={<WritingPage/>}></Route>
        <Route path="/LearnPage" element={<LearnPage/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
