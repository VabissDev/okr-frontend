import { CalloutCard } from "@shopify/polaris";
import React from "react";

export const WorkspaceCard = ({ name, description, id, illustration }) => {
  return (
    <CalloutCard
      title={name}
      illustration={illustration}
      primaryAction={{
        content: "Learn More",
        url: `/workspace/${id}`,
      }}
    >
      {description}
    </CalloutCard>
  );
};
