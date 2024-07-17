import { getUserFromSS } from '@/utils/sessionStorage';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userExist, setUserExist] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = getUserFromSS();

    setUser(user);
  }, [userExist])

  return (
    <UserContext.Provider value={{ user, setUser, setUserExist }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node
};

export default UserProvider;