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
    hasErrored,
    error,
    forceImageRerender,
    imageRerenderIdentifier,
  } = useCartoonDataManager();

  const provider = {
    cartoonList,
    isLoading,
    favoriteClickCount,
    toggleCartoonFavorite,
    incrementFavoriteClickCount,
    hasErrored,
    error,
    forceImageRerender,
    imageRerenderIdentifier,
  };

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};
