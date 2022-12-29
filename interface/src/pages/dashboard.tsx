import { useRouter } from "next/router";
import React from "react";
import { useLogoutUserMutation } from "../generated-graphql/graphql";
import { useAuth } from "../hooks/useAuth";
import { ROUTES } from "../routes";
import commonStyle from "../styles/Common.module.css";

const { layout__container } = commonStyle;

const Dashboard = () => {
  const router = useRouter();
  const { userData } = useAuth();
  const [logoutUser] = useLogoutUserMutation();

  const handleLogout = () => {
    logoutUser();
    router.push(ROUTES.main);
  };

  return (
    <div className={layout__container}>
      <h1>Dashboard</h1>
      <p>Hello {userData?.getCurrentUser?.username}!</p>
      <div onClick={handleLogout} className={commonStyle.card}>
        Logout
      </div>
    </div>
  );
};

export default Dashboard;
