import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import HomePage from '../pages/HomePage/HomePage'
import Profile from "../pages/Profile/Profile";
import RestaurantDetail from "../pages/RestaurantDetail/RestaurantDetail";
import AndressPage from "../pages/AddressPage/AndressPage";
import InitialPage from "../pages/InitialPage/InitialPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";


const Router = () => {
    return (
        <BrowserRouter>
            {/* <Header/> */}
            <Routes>
                <Route path={"/"} element={<InitialPage />} />
                <Route path={"/home"} element={<HomePage />} />
                <Route path={"/login"} element={<LoginPage />} />
                <Route path={"/cadastro"} element={<RegisterPage />} />
                <Route path={"/cadastrar-endereco"} element={<AndressPage />} />
                <Route path={"/restaurante/:id"} element={<RestaurantDetail />} />
                <Route path={"/profile"} element={<Profile/>} />
                <Route path="*" element={<>Not Found</>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router