import React, { useState } from "react";
import { Button, FormLayout, TextField } from "@shopify/polaris";
import { useNavigate, useParams } from "react-router-dom";
import { getAccountData } from "../redux/slices/accountSlice";
import { useSelector } from "react-redux";

const EditProfile = ({ user, onSave }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const users = useSelector((state) => state.users.users);
  const istifadeci = users.find((user) => user.id === id);
  const [profile, setProfile] = useState({
    fullName: user.fullName,
    email: user.email,
    password: user.password,
    orgName: user.orgName,
    //teamName: user.teamName,
  });

  const handleInputChange = (value, name) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    onSave(profile);
    navigate(`/profile/${istifadeci.id}`);
  };

  const account = useSelector(getAccountData);

  return (
    <div className="container">
      <FormLayout>
        <TextField
          label="Full name:"
          type="text"
          value={profile.fullName}
          onChange={(value) => handleInputChange(value, "fullName")}
          required
          placeholder={account.name}
        />
        <TextField
          label="Email:"
          type="email"
          value={profile.email}
          onChange={(value) => handleInputChange(value, "email")}
          readOnly
          placeholder={account.email}
        />
        <TextField
          label="Password:"
          type="password"
          value={profile.password}
          onChange={(value) => handleInputChange(value, "password")}
          required
        />
        <TextField
          label="Organization Name:"
          type="text"
          value={profile.orgName}
          onChange={(value) => handleInputChange(value, "orgName")}
          readOnly
          placeholder={account.org_name}
        />
        <Button primary onClick={handleSaveClick}>
          Save
        </Button>
      </FormLayout>
    </div>
  );
};

export default EditProfile;
