import React, { useState } from "react";
import { Button, FormLayout, TextField } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";

const EditProfile = ({ user, onSave }) => {
  const navigate = useNavigate();

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
    navigate(`/profile/1`);
  };

  return (
    <div className="container">
      <FormLayout>
        <TextField
          label="Full name:"
          type="text"
          value={profile.fullName}
          onChange={(value) => handleInputChange(value, "fullName")}
          required
        />
        <TextField
          label="Email:"
          type="email"
          value={profile.email}
          onChange={(value) => handleInputChange(value, "email")}
          readOnly
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
        />
        <Button primary onClick={handleSaveClick}>
          Save
        </Button>
      </FormLayout>
    </div>
  );
};

export default EditProfile;
