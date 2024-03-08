import { useState, createContext } from "react";

export const ActiveContext = createContext();

const ActiveContextProvider = ({ children }) => {
  const [activeDateTime, setActiveDateTime] = useState(false);
  const [activeListMonth, setActiveListMonth] = useState(false);
  const [activeListYear, setActiveListYear] = useState(false);

  console.log(activeListYear, activeListMonth);

  const displayMonthList = () => {
    setActiveListMonth(!activeListMonth);
  };

  const displayYearList = () => {
    setActiveListYear(!activeListYear);
  };

  const displayDateTime = () => {
    setActiveDateTime(!activeDateTime);
  };

  return (
    <ActiveContext.Provider
      value={{
        displayDateTime,
        displayYearList,
        displayMonthList,
        activeDateTime,
        activeListMonth,
        activeListYear,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
};

export default ActiveContextProvider;
