import React from "react";
import useCartoonDataManager from "./UseCartoonDataManager";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const { cartoonList, isLoading, toggleCartoonFavorite } =
    useCartoonDataManager();

  const provider = {
    cartoonList,
    isLoading,
    toggleCartoonFavorite,
  };

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};
