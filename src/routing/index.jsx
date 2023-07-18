import { Route, Routes } from "react-router-dom";
import { Login } from "@/pages/Login";
import { SignUp } from "@/pages/SignUp";
import { MainLayout } from "@/components/MainLayout";
import { NotFound } from "@/pages/NotFound";
import { Profile } from "@/pages/Profile";
import { Organization } from "@/pages/Organization";
import { Workspace } from "@/pages/Workspace";
import { Home } from "@/pages/Home";
import { UserList } from "@/components/Users";
import { ResetPassword } from "@/pages/ResetPassword";

export const Routing = () => {

  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/reset" element={<ResetPassword />} />

      <Route path="/" element={<MainLayout />}>
        <Route path="organization" element={<Organization />} />
        <Route path="users" element={<UserList />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="workspace/:id" element={<Workspace />} />
      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};
