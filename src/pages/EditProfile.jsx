import { Box, Button, FormLayout, HorizontalStack, Icon, Label, Tag, Text, TextField } from "@shopify/polaris";
//import { Avatar } from "@shopify/polaris";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TagWrapper } from "../styled/inputs";
import { CancelMinor } from "@shopify/polaris-icons";


const user = {
  fullName: "John Doe",
  email: "john@gmail.com",
  orgName: "Company #1",
  password: "********",
  teams: ["team#1", "team#2", "team#3"]
}

const removeTag = (option) => console.log(option)



const EditProfile = ({ onSave }) => {

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
    teams: user.teamName,
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
          label="Organization Name:"
          type="text"
          name="orgName"
          value={profile.orgName}
          onChange={(value) => handleInputChange(value, "orgName")}
          readOnly
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
          label="Reset Your Password:"
          type="password"
          name="password"
          value={profile.password}
          onChange={(value) => handleInputChange(value, "password")}
          required
        />

        <Box>
          <Label>
            Teams: 
          </Label>
          <HorizontalStack gap="4" >
          {
            user.teams.map((option) => (
              <TagWrapper>
                <Tag key={option} onRemove={removeTag(option)}>
                  {option} <Icon source={CancelMinor} color="base" />
                </Tag>
              </TagWrapper>
            ))
          }
        </HorizontalStack>
        </Box>




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
