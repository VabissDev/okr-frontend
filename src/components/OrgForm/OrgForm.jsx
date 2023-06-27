import React, { useState } from "react";
import { Form, FormLayout, TextField, Button, Card } from "@shopify/polaris";

export const OrganizationForm = () => {
  const [organizationName, setOrganizationName] = useState("");
  const [organizations, setOrganizations] = useState([]);

  const handleNameChange = (value) => {
    setOrganizationName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrganization = {
      id: Date.now(),
      name: organizationName,
    };
    setOrganizations([newOrganization, ...organizations]);
    setOrganizationName("");
  };

  return (
    <Card>
      <Card>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <TextField
              label="Organization Name"
              value={organizationName}
              onChange={handleNameChange}
            />
            <Button primary submit>
              Create Organization
            </Button>
          </FormLayout>
        </Form>
      </Card>
      <Card title="Existing Organizations">
        <div style={{ maxHeight: "200px", overflowY: "scroll" }}>
          <ol>
            {organizations.map((organization) => (
              <li key={organization.id}>
                <div>{organization.name}</div>
              </li>
            ))}
          </ol>
        </div>
      </Card>
    </Card>
  );
};
