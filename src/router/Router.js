import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage'


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path="*" element={<>Not Found</>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router