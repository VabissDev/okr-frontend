import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Login } from "@/pages/Login";
import { SignUp } from "@/pages/SignUp";
import { MainLayout } from "@/components/MainLayout";
import { NotFound } from "@/pages/NotFound";
import { Profile } from "@/pages/Profile";
import EditProfile from "@/pages/EditProfile";
import { UserList } from "@/components/Users/UserList";
import { Organization } from "@/pages/Organization";
import { Workspace } from "@/pages/Workspace";
import { Home } from "../pages/Home";

export const Routing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = true;
    if (!login) {
      navigate("/login");
    }
  }, [navigate]);

  //new addition 30-42
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    password: "",
    orgName: "",
    teamName: "",
    image: "",
  });

  const handleSave = (updatedProfileData) => {
    setProfileData(updatedProfileData);
  };
  return (
    <Routes>
      <Route index element={<Home />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="/organization" element={<Organization />} />
        <Route path="/users" element={<UserList />} />
        <Route path="profile/:id" element={<Profile user={profileData} />} />
        <Route
          path="editprofile/:id"
          element={<EditProfile onSave={handleSave} user={profileData} />}
        />
        <Route path="workspace/:id" element={<Workspace />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
