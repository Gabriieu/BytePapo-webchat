import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/login/login-page"
import { MainPage } from "../pages/main/main-page"
import { RegisterPage } from "../pages/register/register-page"
import { PageNotFound } from "../pages/404/page-404"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/chat" element={<MainPage/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}