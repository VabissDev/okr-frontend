import { CalloutCard } from "@shopify/polaris";
import React from "react";

export const WorkspaceCard = ({ name, description, id }) => {
  return (
    <CalloutCard
      title={name}
      illustration="https://ouch-cdn2.icons8.com/_H48roWoztxdlfgJZQRrX_touEv1st371o7fctWmYmA/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTg2/L2MxOWUxMzFjLTNk/NjUtNDI0OS04NWUz/LTI0MzNlYWFhZjU2/YS5wbmc.png"
      primaryAction={{
        content: "Learn More",
        url: `/workspace/${id}`,
      }}
    >
      {description}
    </CalloutCard>
  );
};
