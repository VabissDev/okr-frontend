
export const Organization = () => {
<<<<<<< HEAD
  return (
    <div>Organization</div>
  )
}
=======
  const workspaces = useSelector(getAllWorkspaces);
  const account = useSelector(getAccountData);
  const [active, setActive] = useState(false);
  console.log(account, "org page")

  const illustrations = [
    illustration1,
    illustration2,
    illustration3,
    illustration4,
    illustration5,
  ];

  const accountWorkspaces = workspaces.filter(
    (workspace) => workspace.org_name === account.org_name
  );

  const toggleCreateWorkspace = () => {
    setActive(!active);
  };

  return (
    <div>
      <FlexContainer>
        {(account.role?.toLowerCase() === "admin" ||
          account.role?.toLowerCase() === "teamlead") && (
          <div style={{ flex: 1 }}>
            <Card padding="3">
              <Button
                onClick={toggleCreateWorkspace}
                textAlign="left"
                disclosure={active ? "up" : "down"}
                fullWidth
                primary
              >
                Create new workspace
              </Button>
              {active && <WorkspaceCreate />}
            </Card>
          </div>
        )}

        {account.role?.toLowerCase() === "admin" && (
          <div style={{ margin: "3px 10px" }}>
            <Link to="/users">
              <Button primary>
                <FlexButton>
                  See all users
                  <Icon source={CustomersMinor} color="base" />
                </FlexButton>
              </Button>
            </Link>
          </div>
        )}
      </FlexContainer>

      {/* Workspaces */}
      <VerticalStack>
        {accountWorkspaces.map((workspace) => {
          const randomIllustration =
            illustrations[
              Math.floor(Math.floor(Math.random() * illustrations.length))
            ];
          return (
            <WorkspaceCard
              key={workspace.id}
              {...workspace}
              illustration={randomIllustration}
            />
          );
        })}
      </VerticalStack>
    </div>
  );
};
>>>>>>> origin/master
