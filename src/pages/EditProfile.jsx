import { Button, FormLayout, TextField } from "@shopify/polaris";
//import { Avatar } from "@shopify/polaris";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const EditProfile = ({ user,onSave }) => {
 
  //const [selectedImage, setSelectedImage] = useState("");
  const navigate = useNavigate();

  /*
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };
  */

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [profile, setProfile] = useState({
    fullName: user.fullName,
    email: user.email,
    password: user.password,
    orgName: user.orgName,
    teamName: user.teamName,
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
      <FormLayout onSubmit={handleSubmit}>
        <TextField
          label="Full Name:"
          type="text"
          value={profile.fullName}
          onChange={(value) => handleInputChange(value, "fullName")}
          required
        />
        <TextField
          label="Email:"
          type="email"
          name="email"
          value={profile.email}
          onChange={(value) => handleInputChange(value, "email")}
          readOnly
        />
        <TextField
          label="Password:"
          type="password"
          name="password"
          value={profile.password}
          onChange={(value) => handleInputChange(value, "password")}
          required
        />
        <TextField
          label="Organization Name:"
          type="text"
          name="orgName"
          value={profile.orgName}
          onChange={(value) => handleInputChange(value, "orgName")}
          required

        />
        <TextField
          label="Team Name:"
          type="text"
          name="teamName"
          value={profile.teamName}
          onChange={(value) => handleInputChange(value, "teamName")}
          required
        />
        {/*
        <label>Select an image:</label>
        <input type="file"  onChange={handleImageChange} name="image" required />
        */}
        <Button primary submit fullWidth onClick={handleSaveClick}>
          Save
        </Button>
      </FormLayout>
    </div>
  );
};

export default EditProfile;
