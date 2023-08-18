import React from "react";
import useCartoonDataManager from "./UseCartoonDataManager";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const {
    cartoonList,
    isLoading,
    favoriteClickCount,
    toggleCartoonFavorite,
    incrementFavoriteClickCount,
  } = useCartoonDataManager();

  const provider = {
    cartoonList,
    isLoading,
    favoriteClickCount,
    toggleCartoonFavorite,
    incrementFavoriteClickCount,
  };

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};
