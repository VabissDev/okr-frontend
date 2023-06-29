import { Navigation} from "@shopify/polaris";
import { HomeMinor } from '@shopify/polaris-icons';

export const Navigations = () => {
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: "/",
            label: "Workspace Management",
            icon: HomeMinor,
          },
          {
            url: "/profile/:id",
            excludePaths: ["/"],
            label: "Profile",
          },
          {
            url: "/editprofile/:id",
            excludePaths: ["/"],
            label: "Edit Profile",
          },
          {
            url: "/workspace/create",
            excludePaths: ["/"],
            label: "Create Workspace",
          },
        ]}
      />
    </Navigation>
  );
};
