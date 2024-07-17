import { UserContext } from "@/providers/UserProvider";
import { useContext } from "react";

const useUser = () => {
  const userInfo = useContext(UserContext);

  return userInfo;
};

export default useUser;