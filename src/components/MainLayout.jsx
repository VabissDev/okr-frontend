import { useState, useCallback, useEffect } from "react";
import { TopBar, Frame, Text, Page } from "@shopify/polaris";
import { ArrowRightMinor } from "@shopify/polaris-icons";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { GridLayout } from "@/styled/containers";
import { Navigations } from "./Navigation";
import { useSelector } from "react-redux";
import { getAuth } from "@/redux/slices/AuthSlice";

export const MainLayout = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    !token && navigate("/login");
  }, []);

  const auth = useSelector(getAuth);
  console.log("auth",token, auth)

  const toggleIsUserMenuOpen = useCallback(() => {
    setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen);
  }, []);

  const toggleIsSecondaryMenuOpen = useCallback(() => {
    setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen);
  }, []);

  const handleNavigationToggle = useCallback(() => {
    console.log("toggle navigation visibility");
  }, []);

  const logo = {
    width: 100,
    height: 50,
    topBarSource: "https://www.trplane.com/wp-content/uploads/2021/08/okrs.jpg",
    url: "/organization",
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
                  to={`/profile/${auth?.id}` || "/login"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  My profile
                </Link>
              ),
            },
          ],
        },
        {
          items: [
            {
              icon: ArrowRightMinor,
              content: (
                <Link
                  to="/"
                  onClick={() => {
                    localStorage.removeItem("token");
                  }}
                >
                  Logout
                </Link>
              ),
            },
          ],
        },
      ]}
      name={auth?.fullName || "Anonymous User"}
      detail={auth?.organization?.name || "Anonymous Company"}
      avatar={auth?.avatar && auth.avatar}
      initials={!auth?.avatar && auth?.fullName?.toUpperCase()?.slice(0,1) || "U"}
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
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
      onNavigationToggle={handleNavigationToggle}
    />
  );

  const PageContent = () => {
    return (
      <Page>
        {location.pathname !== "/organization" ? (
          <GridLayout columns="1fr 3fr" gap="30px">
            <Navigations />
            <Outlet />
          </GridLayout>
        ) : (
          <Outlet />
        )}
      </Page>
    );
  };
  

  return (
    <div style={{ height: "50px" }}>
      <Frame topBar={topBarMarkup} logo={logo} children={<PageContent />} />
    </div>
  );
};
