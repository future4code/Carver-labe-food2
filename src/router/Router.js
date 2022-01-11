import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage';
import RestaurantDetail from "../pages/RestaurantDetail/RestaurantDetail";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/restaurante"} element={<RestaurantDetail />}/>
                <Route path="*" element={<>Not Found</>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router