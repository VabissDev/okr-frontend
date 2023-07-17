import { useState, useCallback, useEffect } from "react";
import { TopBar, Frame, Text, Page } from "@shopify/polaris";
import { ArrowRightMinor } from "@shopify/polaris-icons";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { GridLayout } from "@/styled/containers";
import { Navigations } from "./Navigation";
import { useSelector } from "react-redux";
import { getAccountData, isLoggedIn } from "@/redux/slices/accountSlice";
import { organization } from "../redux/slices/organizationsSlice";

export const MainLayout = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
  const login = useSelector(isLoggedIn)
  const account = useSelector(getAccountData);
  //const organization = useSelector(organization)
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    !login && navigate('/login')
  }, [])

  const toggleIsUserMenuOpen = useCallback(() => {
    setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen);
  }, []);

  const toggleIsSecondaryMenuOpen = useCallback(() => {
    setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen);
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
    topBarSource: `${organizations.find(org => org.name === account.org_name)?.url || "https://www.trplane.com/wp-content/uploads/2021/08/okrs.jpg"}`,
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

  const topBarMarkup =


    (
      <TopBar
        showNavigationToggle
        userMenu={userMenuMarkup}
        secondaryMenu={secondaryMenuMarkup}
        onNavigationToggle={handleNavigationToggle}
      />
    )

    ;

  const PageContent = () => {
    return (
      <Page>
        {
          location.pathname !== "/organization"
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
