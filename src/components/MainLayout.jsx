import { useState, useCallback } from "react";
import { TopBar, ActionList, Frame, Text, Page, Box, Thumbnail } from "@shopify/polaris";
import { ArrowRightMinor } from "@shopify/polaris-icons";
import { Link, Outlet, useLocation } from "react-router-dom";
import { GridLayout } from "../styled/containers";
import { Navigations } from "./Navigation";
import { useSelector } from "react-redux";
import { getAccountData } from "../redux/slices/accountSlice";

export const MainLayout = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const account = useSelector(getAccountData);
  const toggleIsUserMenuOpen = useCallback(() => {
    setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen);
  }, []);

  const location = useLocation();
  console.log(location)

  const toggleIsSecondaryMenuOpen = useCallback(() => {
    setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen);
  }, []);

  const handleSearchResultsDismiss = useCallback(() => {
    setIsSearchActive(false);
    setSearchValue("");
  }, []);

  const handleSearchChange = useCallback((value) => {
    setSearchValue(value);
    setIsSearchActive(value.length > 0);
  }, []);

  const handleNavigationToggle = useCallback(() => {
    console.log("toggle navigation visibility");
  }, []);


  const organizations = [
    {
      name: "ABC Company",
      url: "https://www.abc-company.no/wp-content/uploads/2015/10/new-logo.png"
    },
    {
      name: "XYZ Corporation",
      url: "https://www.xyzcomms.com/wp-content/uploads/2017/10/XYZ.png"
    }
  ]

  const logo = {
    width: 100,
    height: 50,
    topBarSource: `${organizations.find(org => org.name === account.org_name).url || "https://www.trplane.com/wp-content/uploads/2021/08/okrs.jpg"}`,
    url: "/",
    accessibilityLabel: "Jaded Pixel",
  };

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [
            {
              content: (
                <Link
                  to={`/profile/${account.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  My profile
                </Link>
              ),
            },
          ],
        },
        {
          items: [{ icon: ArrowRightMinor, content: "Logout" }],
        },
      ]}
      name={account.name}
      detail={account.role}
      avatar={account.avatarSource}
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );

  const searchResultsMarkup = (
    <ActionList
      items={[{ content: "Shopify help center" }, { content: "Edit Profile" }]}
    />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchChange}
      value={searchValue}
      placeholder="Search"
      showFocusBorder
    />
  );

  const secondaryMenuMarkup = (
    <TopBar.Menu
      activatorContent={
        <span>
          <Text as="span" visuallyHidden>
            Secondary menu
          </Text>
        </span>
      }
      open={isSecondaryMenuOpen}
      onOpen={toggleIsSecondaryMenuOpen}
      onClose={toggleIsSecondaryMenuOpen}
      actions={[
        {
          items: [{ content: "Log Out" }],
        },
      ]}
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      secondaryMenu={secondaryMenuMarkup}
      //searchResultsVisible={isSearchActive}
      //searchField={searchFieldMarkup}
      // searchResults={searchResultsMarkup}
      //onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={handleNavigationToggle}
    />
  );

  const PageContent = () => {
    return (
      <Page>
        {
          location.pathname !== "/"
            ? <GridLayout columns="1fr 3fr" gap="30px">
              <Navigations />
              <Outlet />
            </GridLayout>
            : <Outlet />
        }

      </Page>
    )

  }

  return (
    <div style={{ height: "50px" }}>
      <Frame topBar={topBarMarkup} logo={logo} children={<PageContent />} />
    </div>
  );
};
