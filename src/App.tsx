import ContainerTable from "./Component/ContainerTable/ContainerTable.jsx";
import ActiveContextProvider from "./Context/ActiveContext.tsx";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <ActiveContextProvider>
        <ContainerTable />
      </ActiveContextProvider>
    </div>
  );
};

export default App;
