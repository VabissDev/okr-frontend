import { Navigation, Text } from "@shopify/polaris";
import { HomeMinor, HashtagMinor, LockMinor } from "@shopify/polaris-icons";
import { useSelector } from "react-redux";
import { getAllWorkspaces } from "../redux/slices/workspaceSlices";
import { getAccountData } from "../redux/slices/accountSlice";

export const Navigations = () => {
  const workspaces = useSelector(getAllWorkspaces);
  const account = useSelector(getAccountData);

  const navlinks = [
    {
      key: account.id,
      label: (
        <Text
          variant="headingXl"
          as="h3"
          color="subdued"
          children={account.org_name}
        />
      ),
      icon: HomeMinor,
    },
  ];

  const filtered = workspaces.filter(
    (workspace) => workspace.org_name === account.org_name
  );

  filtered.map((item) => {
    const icon = item.visibility === "public" ? HashtagMinor : LockMinor;
    const label = (
      <Text variant="headingMd" as="h4" color="subdued" children={item.name} />
    );
    navlinks.push({
      key: item.id,
      url: `/workspace/${item.id}`,
      label,
      icon,
    });
  });

  return (
    <Navigation location="/">
      <Navigation.Section
        items={navlinks}
        // items={[
        //   {
        //     url: "/",
        //     label: "Workspace Management",
        //     icon: HomeMinor,
        //   },
        //   {
        //     url: "/profile/:id",
        //     excludePaths: ["/"],
        //     label: "Profile",
        //   },
        //   {
        //     url: "/editprofile/:id",
        //     excludePaths: ["/"],
        //     label: "Edit Profile",
        //   },
        //   {
        //     url: "/workspace/create",
        //     excludePaths: ["/"],
        //     label: "Create Workspace",
        //   },
        // ]}
      />
    </Navigation>
  );
};
