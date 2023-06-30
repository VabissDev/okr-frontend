import React, { useState } from "react";
import { Button, Card, Divider, Text, VerticalStack } from "@shopify/polaris";
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
      <Text variant="heading3xl" as="h1">
        My profile
      </Text>
      <VerticalStack>
        <div>
          <img
            src="https://srv1.portal.p-cd.net/850p/2022/04/08/177405-1649405499-962966.jpg"
            alt=""
            style={{ width: 100, height: 100, borderRadius: "50%" }}
          />
        </div>
        <VerticalStack></VerticalStack>
      </VerticalStack>
      <Divider />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Text variant="heading2xl" as="h3">
            Personal Information
          </Text>
        </div>
        <div>
          <Link to={`/editprofile/${id}`}>
            <Button primary>Edit</Button>
          </Link>
        </div>
      </div>

      <VerticalStack spacing="extraTight">
        <div>
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
        </div>
        <br />
        <div>
          <Text style={{ fontWeight: "bold" }}>Team name:</Text>
          <p>
            {updatedUser && updatedUser.teamName ? updatedUser.teamName : user.teamName}
          </p>
        </div>
        <br />
      </VerticalStack>
    </Card>
  );
};
