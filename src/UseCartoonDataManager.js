import { useReducer, useEffect, useContext } from "react";
import cartoonsReducer from "./cartoonsReducer";
import axios from "axios";

// import { InitialCartoonCharacterDataContext } from "../pages/cartoons";

function useCartoonDataManager() {
  // const initialCartoonCharacterData = useContext(InitialCartoonCharacterDataContext);

  const [{ isLoading, cartoonList, favoriteClickCount }, dispatch] = useReducer(cartoonsReducer, {
    isLoading: true,
    cartoonList: [],
    favoriteClickCount: 0,
  });

  function incrementFavoriteClickCount() {
    dispatch({ type: 'incrementFavoriteClickCount' });
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
    // new Promise(function (resolve) {
    //   setTimeout(function () {
    //     resolve();
    //   }, 1000);
    // }).then(() => {
    //   dispatch({
    //     type: "setCartoonList", //misstype caused this to not show cartoons.
    //     data: cartoonCharacterData,
    //   });
    // });
    const fetchData = async function () {
      let result = await axios.get("/api/cartoons");
      dispatch({ type: "setCartoonList", data: result.data });
    };
    fetchData();

    return () => {
      console.log("cleanup");
    };
  }, []);
  return { cartoonList, isLoading, favoriteClickCount, incrementFavoriteClickCount, toggleCartoonFavorite };
}

export default useCartoonDataManager;
