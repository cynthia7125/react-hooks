import React from "react";
import Home from "./Home";
import Cartoons from "./Cartoons";

export const ConfigContext = React.createContext();

const pageToShow = ({ pageName }) => {
  if (pageName === '/') return <Home></Home>;
  if (pageName === 'Speakers') return <Cartoons></Cartoons>;
  return <div>Not Found</div>;
};

const configValue = {
    showSignMeUp: true,
    showCartoonDays: true,
};

const App = ({ pageName }) => {
    return (
      <ConfigContext.Provider value={configValue}>
        <div>{pageToShow(pageName)}</div>
      </ConfigContext.Provider>
    );
  };
  

export default App;