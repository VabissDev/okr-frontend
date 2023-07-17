import { useState } from "react";
import { FormLayout, TextField, Icon } from "@shopify/polaris";
import { getAccountData } from "@/redux/slices/accountSlice";
import { useSelector } from "react-redux";
import { CustomModal } from "@/components/Modals";
import { EditMinor } from "@shopify/polaris-icons";



export const EditUserForm = ({ id }) => {
  const users = useSelector((state) => state.users.users);
  const user = users.find((user) => user.id === id);
  const account = useSelector(getAccountData);
  const [profile, setProfile] = useState({
    fullName: user.name,
    email: user.email,
    password: '',
    orgName: user.org_name,
  });

  const handleInputChange = (value, name) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(profile)
  };

  const title = <Icon source={EditMinor} color="base" />

  return (
    <CustomModal
      buttonTitle={title}
      modalTitle={profile.fullName}
      primary={{ content: "Save", action: handleSubmit }}
      secondary
    >
      <FormLayout>
        <TextField
          label="Full name:"
          type="text"
          value={profile.fullName}
          onChange={(value) => handleInputChange(value, "fullName")}
          required
          placeholder="John Doe"
        />
        <TextField
          label="Email:"
          type="email"
          value={profile.email}
          onChange={(value) => handleInputChange(value, "email")}
          readOnly
          placeholder="example@mail.com"
        />
        {/* <TextField
          label="Avatar:"
          type="file"
        /> */}
        {/* <TextField
          label="Password:"
          type="password"
          value={profile.password}
          onChange={(value) => handleInputChange(value, "password")}
          required
        /> */}
        <TextField
          label="Organization Name:"
          type="text"
          value={profile.orgName}
          onChange={(value) => handleInputChange(value, "orgName")}
          readOnly
          placeholder={account.org_name}
        />
      </FormLayout>
    </CustomModal>
  );
};

