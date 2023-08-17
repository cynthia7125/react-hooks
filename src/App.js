import React from "react";
import Home from "./Home";
import Cartoons from "./Cartoons";
import EmailValidatingForm from "./EmailValidatingForm";

export const ConfigContext = React.createContext();

const pageToShow = ({ pageName }) => {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'Cartoons') return <Cartoons />;
  if (pageName === 'EmailValidatingForm') return <EmailValidatingForm />;
  return <div>Not Found</div>;
};

const configValue = {
  showSignMeUp: true,
  showCartoonDays: true,
};

const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <div>{pageToShow({ pageName })}</div>
    </ConfigContext.Provider>
  );
};

export default App;
