import { useReducer, useEffect, useContext } from "react";
import cartoonsReducer from "./cartoonsReducer";
import axios from "axios";

function useCartoonDataManager() {
  const [
    {
      isLoading,
      cartoonList,
      favoriteClickCount,
      hasErrored,
      error,
      imageRerenderIdentifier,
    },
    dispatch,
  ] = useReducer(cartoonsReducer, {
    isLoading: true,
    cartoonList: [],
    favoriteClickCount: 0,
    hasErrored: false,
    Error: null,
    imageRerenderIdentifier: 0,
  });

  function incrementFavoriteClickCount() {
    dispatch({ type: "incrementFavoriteClickCount" });
  }

  function forceImageRerender() {
    dispatch({ type: "forceImageRerender" });
  }

  function toggleCartoonFavorite(cartoonRec) {
    const updateData = async function () {
      axios.put(`/api/cartoons/${cartoonRec.id}`, {
        ...cartoonRec,
        favorite: !cartoonRec.favorite,
      });
      cartoonRec.favorite === true
        ? dispatch({ type: "unfavourite", id: cartoonRec.id })
        : dispatch({ type: "favorite", id: cartoonRec.id });
    };
    updateData();
  }

  useEffect(() => {
    const fetchData = async function () {
      try {
        let result = await axios.get("/api/cartoons");
        dispatch({ type: "setCartoonList", data: result.data });
      } catch (e) {
        dispatch({ type: "errored", error: e });
      }
    };
    fetchData();

    return () => {
      console.log("cleanup");
    };
  }, []);
  return {
    cartoonList,
    isLoading,
    favoriteClickCount,
    incrementFavoriteClickCount,
    toggleCartoonFavorite,
    hasErrored,
    error,
    forceImageRerender,
    imageRerenderIdentifier,
  };
}

export default useCartoonDataManager;
