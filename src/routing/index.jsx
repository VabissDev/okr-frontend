import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Login } from "@/pages/Login";
import { SignUp } from "@/pages/SignUp";
import { MainLayout } from "@/components/MainLayout";
import { NotFound } from "@/pages/NotFound";
import { WorkspaceManagement } from "@/pages/WorkspaceManagement";
import { Profile } from "@/pages/Profile";
import EditProfile from "@/pages/EditProfile";
import {UserList} from "../components/Users/UserList";
import { Workspace } from "../components/Workspace/Workspace";

export const Routing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = true;
    if (!login) {
      navigate("/login");
    }
  }, [navigate]);

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
            <Route path="/users" element={<UserList />}/>
                <Route path='profile/:id' element={<Profile/>} />
                <Route path='editprofile/:id' element={<EditProfile />} />
                <Route path='workspace/create' element={<WorkspaceManagement />} />
                <Route path="workspace/:id" element={<Workspace/>} />
            </Route>
            <Route path='*' element={<NotFound />} />

        </Routes>
    )
}
