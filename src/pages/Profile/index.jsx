import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { EmptyData } from "@/components/EmptyData";
import { ProfileCard } from "./ProfileCard";


export const Profile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users.users);
  const user = users.find((user) => user.id === id);

  return (
    <>
      {user ? (
        <ProfileCard profile={user}/>
      ) : (
        <EmptyData
          heading="Sorry, user cannot be found."
          action={
            {
              title: "Back To Workspaces",
              path: "/organization"
            }
          }
        />
      )}
    </>
  );
};
