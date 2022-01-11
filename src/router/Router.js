import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import HomePage from '../pages/HomePage/HomePage'
import Profile from "../pages/Profile/Profile";

const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path="/profile" element={<Profile/>} />
                <Route path="*" element={<>Not Found</>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router