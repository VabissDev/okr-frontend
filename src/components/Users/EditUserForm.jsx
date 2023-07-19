import { useCallback, useState } from "react";
import { FormLayout, TextField, Icon, Button, Collapsible } from "@shopify/polaris";
import { useSelector } from "react-redux";
import { CustomModal } from "@/components/Modals";
import { EditMinor } from "@shopify/polaris-icons";
import { PasswordInputWrapper } from "@/styled/inputs"
import { HideMinor, ViewMinor } from "@shopify/polaris-icons"
import { ResetButtonWrapper } from "../../styled/buttons";
import { getAuth } from "@/redux/slices/AuthSlice";


export const EditUserForm = ({ id }) => {
  const users = useSelector((state) => state.users.users);
  const user = users.find((user) => user.id === id);
  const account = useSelector(getAuth);

  const canEditPassword = user.id === account.id;
  console.log("can edit", canEditPassword)

  const [profile, setProfile] = useState({
    fullName: user.name,
    email: user.email,
    password: '',
    orgName: user.org_name,
  });
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm: false
  });

  const hanlePasswordChange = (value) => setPassword(value.trim());
  const hanleConfirmChange = (value) => setConfirm(value.trim());

  const [open, setOpen] = useState(false);

  const handleToggle = useCallback(() => setOpen((open) => !open), []);


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
        <TextField
          label="Avatar:"
          type="file"
        />
        {
          canEditPassword &&
          <>
            <ResetButtonWrapper>
              <Button
                onClick={handleToggle}
                ariaExpanded={open}
                ariaControls="basic-collapsible"
              >
                Reset your password
              </Button>
            </ResetButtonWrapper>

            <Collapsible
              open={open}
              id="basic-collapsible"
              transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}
              expandOnPrint
            >
              <PasswordInputWrapper>
                <TextField
                  label="Password:"
                  type={showPassword.password ? "text" : "password"}
                  placeholder="*********"
                  value={password}
                  onChange={hanlePasswordChange}
                  error={passwordError}
                />
                <Button
                  className="show-password-btn"
                  onClick={() =>
                    setShowPassword({
                      ...showPassword,
                      password: !showPassword.password,
                    })
                  }
                >
                  <Icon
                    source={showPassword.password ? ViewMinor : HideMinor}
                    color="base"
                  />
                </Button>
              </PasswordInputWrapper>
              <PasswordInputWrapper>
                <TextField
                  label="Password Confirm:"
                  type={showPassword.confirm ? "text" : "password"}
                  placeholder="*********"
                  value={confirm}
                  onChange={hanleConfirmChange}
                  error={confirmError}
                />
                <Button
                  className="show-password-btn"
                  onClick={() =>
                    setShowPassword({
                      ...showPassword,
                      confirm: !showPassword.confirm,
                    })
                  }
                >
                  <Icon
                    source={showPassword.password ? ViewMinor : HideMinor}
                    color="base"
                  />
                </Button>
              </PasswordInputWrapper>
            </Collapsible>
          </>
        }

        <TextField
          label="Organization Name:"
          type="text"
          value={profile.orgName}
          onChange={(value) => handleInputChange(value, "orgName")}
          readOnly
          placeholder={account.org_name}
        />
      </FormLayout>
    </CustomModal >
  );
};

