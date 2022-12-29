import { useRouter } from "next/router";
import React from "react";
import { useGetCurrentUserQuery } from "../generated-graphql/graphql";
import { ROUTES } from "../routes";

export const useAuth = () => {
  const router = useRouter();
  const { data: userData } = useGetCurrentUserQuery();

  React.useEffect(() => {
    if (!userData) {
      router.push(ROUTES.main);
    }
  }, [userData]);

  return {
    userData,
  };
};
