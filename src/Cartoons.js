import React, {
  useEffect,
  useState,
  useMemo,
  useContext,
  useReducer,
  useCallback,
} from "react";

import { Header } from "./Header";
import { Menu } from "./Menu";
import cartoonCharacterData from "./CartoonData";
import CartoonDetail from "./CartoonDetail";
import { ConfigContext } from "./App";
import cartoonsReducer from "./cartoonsReducer";

const Cartoons = ({}) => {
  const [cartoonSaturday, setCartoonSaturday] = useState(true);
  const [cartoonSunday, setCartoonSunday] = useState(true);

  // const [cartoonList, setCartoonList] = useState([]);
  const [cartoonList, dispatch] = useReducer(cartoonsReducer, []);
  const [isLoading, setIsLoading] = useState(true);

  const context = useContext(ConfigContext);

  useEffect(() => {
    setIsLoading(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      setIsLoading(false);
      const cartoonListServerFilter = cartoonCharacterData.filter(
        ({ sat, sun }) => {
          return (cartoonSaturday && sat) || (cartoonSunday && sun);
        }
      );
      dispatch({
        type: "setCartoonList", //misstype caused this to not show cartoons.
        data: cartoonListServerFilter,
      });
    });
    // setCartoonList(cartoonListServerFilter);
    return () => {
      console.log("cleanup");
    };
  }, []);

  const handleChangeSaturday = () => {
    setCartoonSaturday(!cartoonSaturday);
  };
  const handleChangeSunday = () => {
    setCartoonSunday(!cartoonSunday);
  };



  const heartFavoriteHandler = useCallback((e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes["data-sessionId"].value);

    dispatch({
      type: favoriteValue === true ? "favorite" : "unfavorite",
      sessionId,
    });
    // setCartoonList(
    //   cartoonList.map((item) => {
    //     if (item.id === sessionId) {
    //       return { ...item, favorite: favoriteValue };
    //     }
    //     return item;
    //   })
    // );
  }, []);
  


  const newcartoonList = useMemo(
        () =>
          cartoonList
            .filter(
              ({ sat, sun }) =>
                (cartoonSaturday && sat) || (cartoonSunday && sun)
            )
            .sort(function (a, b) {
              if (a.firstName < b.firstName) {
                return -1;
              }
              if (a.firstName > b.firstName) {
                return 1;
              }
              return 0;
            }),
        [cartoonSaturday, cartoonSunday, cartoonList]
      );
  // [cartoonSaturday, cartoonSunday, cartoonList]
  // );

  const cartoonListFiltered = isLoading ? [] : newcartoonList;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
          {context.showCartoonDays === false ? null : (
            <div className="hide">
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSaturday}
                    checked={cartoonSaturday}
                  />
                  Saturday cartoons
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSunday}
                    checked={cartoonSunday}
                  />
                  Sunday cartoons
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="card-deck">
            {cartoonListFiltered.map(
              ({ id, firstName, lastName, bio, favorite }) => {
                return (
                  <CartoonDetail
                    key={id}
                    id={id}
                    favorite={favorite}
                    firstName={firstName}
                    lastName={lastName}
                    bio={bio}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartoons;
