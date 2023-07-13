import React, { useState } from 'react';
import { TextField, FormLayout, Button, Select, Form } from '@shopify/polaris';
import { CustomModal } from '../Modals/CustomModal';


export const AddUserForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('viewer');

    const handleFullNameChange = (value) => {
        setFullName(value);
    };

    const handleEmailChange = (value) => {
        setEmail(value);
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
    };

    const handleStatusChange = (value) => {
        setStatus(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
    };

    return (
<CustomModal buttonTitle="Add New User">
        <Form onSubmit={handleSubmit}>
            <FormLayout>
                <TextField
                    label="Full Name"
                    value={fullName}
                    onChange={handleFullNameChange}
                    type="text"
                    required
                />
                <TextField
                    label="Email"
                    value={email}
                    onChange={handleEmailChange}
                    type="email"
                    required
                />
                <TextField
                    label="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    type="password"
                    required
                />
                <Select
                    label="Status"
                    options={[
                        { label: 'Team Lead', value: 'teamLead' },
                        { label: 'Team Member', value: 'teamMember' },
                        { label: 'Viewer', value: 'viewer', },
                    ]}
                    value={status}
                    onChange={handleStatusChange}
                />
                <Button primary submit>
                    Submit
                </Button>
            </FormLayout>
        </Form>
        </CustomModal>


    );
};

