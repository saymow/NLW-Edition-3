import React, { createContext, useContext } from "react";

import GlobalStyles from "../styles/global";

const Context = createContext({});

const GlobalContext: React.FC = ({ children }) => {
  return (
    <Context.Provider value={{}}>
      <GlobalStyles />
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(Context);

  return context;
};

export default GlobalContext;
