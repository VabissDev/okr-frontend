import { Icon, Navigation, Text } from "@shopify/polaris";
import { HomeMinor, LockMinor, GlobeMinor } from "@shopify/polaris-icons";
import { useSelector } from "react-redux";
import { getAllWorkspaces } from "@/redux/slices/workspaceSlices";
import { getAccountData } from "@/redux/slices/accountSlice";
import { NavLink } from "react-router-dom";
import { ActiveLink } from "../styled/buttons";
import { NavigationWrapper } from "../styled/containers";

export const Navigations = () => {
  const workspaces = useSelector(getAllWorkspaces);
  const account = useSelector(getAccountData);

  const navlinks = [
    {
      key: account.id,
      url: "/organization ",
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
    const icon = item.visibility === "public" ? GlobeMinor : LockMinor;
    const label = (
      <ActiveLink>
        <NavLink to={`/workspace/${item.id}`}>
          <Text variant="headingMd" as="h4" color="subdued" children={item.name} />
        </NavLink>
      </ActiveLink>
    );
    navlinks.push({
      key: item.id,
      label,
      icon,
    });
  });

  return (
    <Navigation location="/">
      <NavigationWrapper>
        <Navigation.Section
          items={navlinks}
        />
      </NavigationWrapper>
    </Navigation>
  );
};
