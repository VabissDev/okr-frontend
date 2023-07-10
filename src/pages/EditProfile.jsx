import { Button, FormLayout, TextField } from "@shopify/polaris";
<<<<<<< HEAD
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
=======
import { useNavigate, useParams } from "react-router-dom";
import { getAccountData } from "../redux/slices/accountSlice";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const users = useSelector((state) => state.users.users);
  const user = users.find((user) => user.id === id);
  const account = useSelector(getAccountData);
  const [profile, setProfile] = useState({
    fullName: user.name,
    email: user.email,
    password: '',
    orgName: user.org_name,
>>>>>>> origin/master
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
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/master
    </div>
  );
};
export default EditProfile;
