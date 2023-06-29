import React from "react";
import { Btn, Display } from "../styled/profilee";
import { Space } from "../styled/profilee";
import {
  Card,
  Divider,
  Text,
  VerticalStack,
  HorizontalStack,
} from "@shopify/polaris";
import { Icon } from "@shopify/polaris";
import { EditMinor } from "@shopify/polaris-icons";
import { Link } from "react-router-dom";


export const Profile = () => {
  const user = {
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    password: "**********",
    org_name: "VABISS",
    team_name: "Developers",
  };
  const id = 1;
  return (
    <Card>
      <Text variant="heading3xl" as="h1">
        My profile
      </Text>
      <HorizontalStack>
        <Space>
          <div>
            <Text variant="heading2xl" as="h4">
              {user.fullName}
            </Text>
            <Space>
              <Text>{user.org_name}</Text>
            </Space>
            <Text>{user.team_name}</Text>
          </div>
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
          <Link to={`/editprofile/${id}`}><Btn>Edit</Btn></Link> 
        </Space>
      </HorizontalStack>

      <Display>
        <div>
          <Text style="strong">Full name:</Text>
          <p>{user.fullName}</p>
        </div>
        <div>
          <Text style="strong">Email Address:</Text>
          <p>{user.fullName}</p>
        </div>
        <div>
          <Text style="strong">Password:</Text>
          <p>{user.password}</p>
        </div>
        <div>
          <Text style="strong">Organization name:</Text>
          <p>{user.org_name}</p>
        </div>
        <div>
          <Text style="strong">Team name:</Text>
          <p>{user.team_name}</p>
        </div>
      </Display>
    </Card>
  );
};
