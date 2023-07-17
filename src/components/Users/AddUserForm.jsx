import React, { useState } from 'react';
import { TextField, FormLayout, Select, Form, Icon } from '@shopify/polaris';
import { CustomModal } from '@/components/Modals/CustomModal';
import { CustomerPlusMajor } from '@shopify/polaris-icons';
import { FlexText } from '@/styled/buttons';
import { EMAIL_REGEX } from '@/utils/regex';
import { userRoleOptions } from '@/utils/options';


export const AddUserForm = () => {
    const [fullName, setFullName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);

    const [emailError, setEmailError] = useState('');
    const [status, setStatus] = useState('viewer');

    const handleFullNameChange = (value) => {
        setFullName(value.trim());
    };

    const handleEmailChange = (value) => {
        setEmail(value.trim());
    };

    const handleStatusChange = (value) => {
        setStatus(value.trim());
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setValidEmail(EMAIL_REGEX.test(email))

        setEmailError(!validEmail ? "Invalid Email Format" : "");
        setNameError(!fullName ? "Full Name is required" : "");
        !email && setEmailError("Email field is required");

    };

    const buttonTitle = (
        <FlexText> New User
            <Icon source={CustomerPlusMajor} color='base' />
        </FlexText>
    )

    return (
        <CustomModal
            buttonTitle={buttonTitle}
            modalTitle="Add New User"
            primary={{ content: "Invite", action: handleSubmit }}
            secondary
        >
            <Form onSubmit={handleSubmit}>
                <FormLayout>
                    <TextField
                        label="Full Name"
                        value={fullName}
                        onChange={handleFullNameChange}
                        type="text"
                        error={nameError}
                        required
                    />
                    <TextField
                        label="Email"
                        value={email}
                        onChange={handleEmailChange}
                        type="email"
                        error={emailError}
                        required
                    />
                    <Select
                        label="Status"
                        options={userRoleOptions}
                        value={status}
                        onChange={handleStatusChange}
                    />
                </FormLayout>
            </Form>
        </CustomModal>

    );
};

