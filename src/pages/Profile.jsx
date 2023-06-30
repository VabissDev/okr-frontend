import React, { useState } from "react";
import {
  Button,
  Card,
  Divider,
  Text,
  VerticalStack,
  Box,
  Icon,
  Tag,
} from "@shopify/polaris";
import { EditMinor } from "@shopify/polaris-icons";
import { Space } from "../styled/profilee";
import { Link } from "react-router-dom";

export const Profile = ({ user, onSave }) => {
  const id = 1;
  const [updatedUser, setUpdatedUser] = useState(null);

  const handleSaveProfile = (updatedProfile) => {
    setUpdatedUser(updatedProfile);
    onSave(updatedProfile);
  };

  return (
    <Card>
      <Space>
        <Box>
          <Text variant="heading3xl" as="h1">
            {user.fullName || "John Doe"}
          </Text>
          <Space>
            <Text variant="headingMd" as="p" fontWeight="semibold">
              Organization:
            </Text>
            <Text>{user.orgName || "XX Company"}</Text>
          </Space>

          <Space>
            <Text variant="headingMd" as="p" fontWeight="semibold">
              Email:
            </Text>
            <Text>{user.email || "johndoe@gmail.com"}</Text>
          </Space>
        </Box>
        <img
          src="https://srv1.portal.p-cd.net/850p/2022/04/08/177405-1649405499-962966.jpg"
          alt=""
          style={{ width: 100, height: 100, borderRadius: "50%" }}
        />
      </Space>
      <Divider />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "10px",
        }}
      >
        <div>
          <Text variant="heading2xl" as="h3">
            Personal Information
          </Text>
        </div>
        <div>
          <Link to={`/editprofile/${id}`}>
            <Button primary>
              <Icon source={EditMinor} color="base" />
            </Button>
          </Link>
        </div>
      </div>

      <VerticalStack spacing="extraTight">
        {/* <div>
          <Text style={{ fontWeight: "bold" }}>Full name:</Text>
          <p>
            {updatedUser && updatedUser.fullName ? updatedUser.fullName : user.fullName}
          </p>
        </div>
        <br />
        <div>
          <Text style={{ fontWeight: "bold" }}>Email Address:</Text>
          <p>
            {updatedUser && updatedUser.email ? updatedUser.email : user.email}
          </p>
        </div>
        <br />
        <div>
          <Text style={{ fontWeight: "bold" }}>Organization name:</Text>
          <p>
            {updatedUser && updatedUser.orgName ? updatedUser.orgName : user.orgName}
          </p>
        </div> */}
        <Space>
          <Text style={{ fontWeight: "bold" }}>Team name:</Text>
          <Tag>{user.teamName || "Team number 1"}</Tag>

          {/* <p>
            {updatedUser && updatedUser.teamName
              ? updatedUser.teamName
              : user.teamName}
          </p> */}
        </Space>
      </VerticalStack>
    </Card>
  );
};
