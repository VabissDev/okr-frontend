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
    userName: "",
    emailAddress: "",
    password: "",
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
            label="Username:"
            type="text"
            name="userName"
            value={profile.userName}
            onChange={(value) => handleInputChange(value, "userName")}
            required
          />
          <TextField
            label="Email:"
            type="email"
            name="emailAddress"
            value={profile.emailAddress}
            onChange={(value) => handleInputChange(value, "emailAddress")}
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
          <p>Username : {profile.userName}</p>
          <p>Email Address : {profile.emailAddress}</p>
          <p>Password : {profile.password}</p>
          <Button onClick={handleEditClick}>Edit</Button>
        </div>
      )}
    </div>
  );
};
export default EditProfile;
