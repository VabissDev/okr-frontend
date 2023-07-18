import { Icon, Navigation, Text } from "@shopify/polaris";
import { HomeMinor, LockMinor, GlobeMinor, HomeMajor } from "@shopify/polaris-icons";
import { useSelector } from "react-redux";
import { getAllWorkspaces } from "@/redux/slices/workspaceSlices";
import { getAccountData } from "@/redux/slices/accountSlice";
import { NavLink } from "react-router-dom";
import { ActiveLink, NoneUnderline } from "../styled/buttons";
import { NavigationWrapper } from "../styled/containers";

export const Navigations = () => {
  const workspaces = useSelector(getAllWorkspaces);
  const account = useSelector(getAccountData);

  const navlinks = [
    {
      key: account.id,
      label: (
        <NoneUnderline>
          <NavLink to="/organization">
            <Text
              variant="headingXl"
              as="h3"
              children={account.org_name}
            />
          </NavLink>
        </NoneUnderline>
      ),
      icon: HomeMajor,
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
