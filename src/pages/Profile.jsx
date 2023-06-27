import React from "react";
import { Header } from "../components/Header";
import { Btn, Left } from "../styled/profilee";
import { First, Second, Edit, Item } from "../styled/profilee";
export default function Profile() {
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    phone: "055455555",
    bio: "Team Manager",
  };
  return (
    <div className="profile">
      <Header />
      <h2 style={{ paddingBottom: 20, fontSize: 30 }}>My Profile</h2>
      <First>
        <Left>
          <img
            src="https://palmettopayroll.net/wp-content/uploads/2020/07/bigstock-Female-hacker-hacking-security-351691055.jpg"
            alt=""
            style={{ width: 100, height: 100, borderRadius: "50%" }}
          />
          <div className="profile__first--text">
            <p>
              {user.firstName} {user.lastName}
            </p>
            <span>{user.bio}</span>
          </div>
        </Left>
        <Btn>Edit</Btn>
      </First>
      <Second>
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
      </Second>
    </div>
  );
}
