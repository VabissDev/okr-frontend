import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { Login } from "@/pages/Login";
import { SignUp } from "@/pages/SignUp";
import { MainLayout } from "@/components/MainLayout";
import { NotFound } from "@/pages/NotFound";
import { WorkspaceManagement } from "@/pages/WorkspaceManagement";
import EditProfile from "@/pages/EditProfile";
import Profile from "../pages/Profile";

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
            <Route path="/" element={<MainLayout />}>
                <Route index element={<WorkspaceManagement />} />
                <Route path='profile' element={<Profile/>} />
                <Route path='editprofile/:id' element={<EditProfile />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
