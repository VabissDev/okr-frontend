import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { Login } from "@/pages/Login";
import { SignUp } from "@/pages/SignUp";
import { MainLayout } from "@/components/MainLayout";
import { Organization } from "@/pages/Organization";
import { NotFound } from "@/pages/NotFound";
import { Profile } from "@/pages/Profile";


export const Routing = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const login = true;
        if (!login) {
            navigate("/login")
        }
    }, [navigate])

    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/profile' element = {<Profile/>}/>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Organization />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}