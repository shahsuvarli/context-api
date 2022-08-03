import { createContext, useContext, useState } from "react";

const homeContext = createContext();

export const HomeContext = ({ children }) => {
  const [count, setCount] = useState(5);
  const [showPanel, setShowPanel] = useState(false);

  const values = {
    count,
    setCount,
    showPanel,
  };

  return <homeContext.Provider value={values}>{children}</homeContext.Provider>;
};

export const useHomeContext = () => {
  const homeData = useContext(homeContext);
  return homeData
};
