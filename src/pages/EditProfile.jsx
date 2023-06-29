import { Button, FormLayout, TextField } from "@shopify/polaris";
import {Avatar} from '@shopify/polaris';
import React, { useState } from "react";

const EditProfile = () => {

  const [selectedImage, setSelectedImage] = useState(null); 
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [profile, setProfile] = useState({
    fullName: "",
    orgName: "",
    email: "",
    password: "",
    teamName: ""
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (value, name) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };


  return (
    <div className="container">
      {isEditing ? (
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
          <label>Select an image:</label>
          <input
              type="file"
              onChange={handleImageChange}
              required
          />
          <Button primary submit fullWidth onClick={handleSaveClick}>
            Save
          </Button>
        </FormLayout>
      ) : (
        <div className="personalData">
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" width={"50px"} height={"50px"} style={{'borderRadius':'100px'}}/>
          ) : (
          <Avatar customer name="Farrah" />
          )}
          <p>Full Name : {profile.fullName}</p>
          <p>Email : {profile.email}</p>
          <p>Password : {profile.password}</p>
          <p>Organization Name : {profile.orgName}</p>
          <p>Team Name : {profile.teamName}</p>          
          <Button onClick={handleEditClick}>Edit</Button>
        </div>
      )}
    </div>
  );
};
export default EditProfile;
