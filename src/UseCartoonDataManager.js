import react from "react";
import { useReducer, useEffect } from "react";
import cartoonCharacterData from "./CartoonData";
import cartoonsReducer from "./cartoonsReducer";

function useCartoonDataManager() {
  const [{ isLoading, cartoonList }, dispatch] = useReducer(cartoonsReducer, {
    isLoading: true,
    cartoonList: [],
  });
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      // setIsLoading(false);
      // const cartoonListServerFilter = cartoonCharacterData.filter(
      //   ({ sat, sun }) => {
      //     return (cartoonSaturday && sat) || (cartoonSunday && sun);
      //   }
      // );
      dispatch({
        type: "setCartoonList", //misstype caused this to not show cartoons.
        // data: cartoonListServerFilter,
        data: cartoonCharacterData,
      });
    });
    // setCartoonList(cartoonListServerFilter);
    return () => {
      console.log("cleanup");
    };
  }, []);
  return { cartoonList, isLoading, dispatch };
}

export default useCartoonDataManager;
