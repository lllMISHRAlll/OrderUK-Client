import React, { createContext, useEffect, useState } from "react";
export const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  const [cartToggle, SetcartToggle] = useState(false);

  useEffect(() => {
    if (userInfo) {
    }
  }, [userInfo]);

  return (
    <UserInfoContext.Provider
      value={{
        userInfo,
        setUserInfo,
        cartToggle,
        SetcartToggle,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};
