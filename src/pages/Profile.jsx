import React, { useState } from "react";
import { Btn, Display } from "../styled/profilee";
import { Space } from "../styled/profilee";
import {
  Card,
  Divider,
  Text,
  VerticalStack,
  HorizontalStack,
  Box,
} from "@shopify/polaris";
import { Icon } from "@shopify/polaris";
import { EditMinor } from "@shopify/polaris-icons";
import { Link } from "react-router-dom";

export const Profile = ({ user, onSave}) => {
  
  const id = 1;

  const [updatedUser, setUpdatedUser] = useState(null);

  const handleSaveProfile = (updatedProfile) => {
    setUpdatedUser(updatedProfile);
    onSave(updatedProfile);
  };

  return (
    <Card>
      <Text variant="heading3xl" as="h1">
        My profile
      </Text>
      <HorizontalStack>
        <Space>
          {/*
          {user.image ? (
            <img
              src={user.image}
              alt=""
              style={{ width: 100, height: 100, borderRadius: "50%" }}
            />
          ) : (
            <img
              src="https://srv1.portal.p-cd.net/850p/2022/04/08/177405-1649405499-962966.jpg"
              alt=""
              style={{ width: 100, height: 100, borderRadius: "50%" }}
            />
          )}
          */}
         <img
            src="https://srv1.portal.p-cd.net/850p/2022/04/08/177405-1649405499-962966.jpg"
            alt=""
            style={{ width: 100, height: 100, borderRadius: "50%" }}
          />
        </Space>
        <VerticalStack></VerticalStack>
      </HorizontalStack>
      <Divider />

      <HorizontalStack>
        <Space>
          <Text variant="heading2xl" as="h3">
            Personal Information
          </Text>
          <Link to={`/editprofile/${id}`}>
            <Btn>Edit</Btn>
          </Link>
        </Space>
      </HorizontalStack>

      <Display>
        <div>
          <Text style="strong">Full name:</Text>
          <p>{updatedUser ? updatedUser.fullName : user.fullName}</p>
        </div>
        <div>
          <Text style="strong">Email Address:</Text>
          <p>{updatedUser ? updatedUser.email : user.email}</p>
        </div>
        <div>
          <Text style="strong">Password:</Text>
          <p>{updatedUser ? updatedUser.password : user.password}</p>
        </div>
        <div>
          <Text style="strong">Organization name:</Text>
          <p>{updatedUser ? updatedUser.orgName : user.orgName}</p>
        </div>
        <div>
          <Text style="strong">Team name:</Text>
          <p>{updatedUser ? updatedUser.teamName : user.teamName}</p>
        </div>
      </Display>
    </Card>
  );
};