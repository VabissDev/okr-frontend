import React from "react";
import { Link } from "react-router-dom";
import {
  NotFoundContainer,
  NotFoundHeading,
  NotFoundText,
} from "../styled/notFound";
import { Button, Card } from "@shopify/polaris";

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <Card>
        <NotFoundHeading>404</NotFoundHeading>
        <NotFoundText variant="headingXl" as="p" alignment="center">
          Page not found
        </NotFoundText>
        <Link to="/">
          <Button fullWidth primary>
            Go home
          </Button>
        </Link>
      </Card>
    </NotFoundContainer>
  );
};
