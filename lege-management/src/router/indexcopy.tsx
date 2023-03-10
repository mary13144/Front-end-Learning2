import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import About from "@/views/About";
import Home from "@/views/Home";
import App from "@/App";
const baseRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App/>}>
                    <Route path={'/'} element={<Navigate to={'/home'}/>}></Route>
                    <Route path={'/about'} element={<About/>}></Route>
                    <Route path={'/home'} element={<Home/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default baseRouter;