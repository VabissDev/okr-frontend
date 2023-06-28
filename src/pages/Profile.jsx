import React from "react";
import { Btn, Left } from "../styled/profilee";
import { First, Second, Edit, Item } from "../styled/profilee";
import { Button, Card, Divider, Text } from "@shopify/polaris";
import { Icon } from "@shopify/polaris";
import { EditMinor } from "@shopify/polaris-icons";
import { Link } from "react-router-dom";


export const Profile = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    phone: "055455555",
    bio: "Team Manager",
  };
  const id = 1;
  return (
    <Card>
      <Text variant="heading4xl" as="h1">
        {user.firstName} {user.lastName}
      </Text>
      {/* <First> */}

      <img
        src="https://palmettopayroll.net/wp-content/uploads/2020/07/bigstock-Female-hacker-hacking-security-351691055.jpg"
        alt=""
        style={{ width: 100, height: 100, borderRadius: "50%" }}
      />
      <Divider />
      <div className="profile__first--text">
        <span>{user.bio}</span>
      </div>
      <Link to={`/editprofile/${id}`}>
        <Icon color="base" source={EditMinor} />
      </Link>
      <h5 style={{ paddingBottom: 30 }}>Personal Information</h5>
      <Edit>
        <Item>
          <p style={{ color: "gray" }}>First name</p>
          <p>{user.firstName}</p>
        </Item>
        <Item>
          <p style={{ color: "gray" }}>Last name</p>
          <p>{user.lastName}</p>
        </Item>
        <Item>
          <p style={{ color: "gray" }}>Email address</p>
          <p>{user.email}</p>
        </Item>
        <Item>
          <p style={{ color: "gray" }}>Phone</p>
          <p>{user.phone}</p>
        </Item>
        <Item>
          <p style={{ color: "gray" }}>Bio</p>
          <p>{user.bio}</p>
        </Item>
        <Btn>Edit</Btn>
      </Edit>
      {/* </Second> */}
    </Card>
  );
}
