import React, { useState, useMemo, useContext, useCallback } from "react";
import { Header } from "./Header";
import { Menu } from "./Menu";
import CartoonDetail from "./CartoonDetail";
import { ConfigContext } from "./App";
// import { GlobalContext } from "./GlobalState";
import useCartoonDataManager from "./UseCartoonDataManager";

const Cartoons = ({}) => {
  const [cartoonSaturday, setCartoonSaturday] = useState(true);
  const [cartoonSunday, setCartoonSunday] = useState(true);
  const context = useContext(ConfigContext);

  const { isLoading, cartoonList, toggleCartoonFavorite, } = useCartoonDataManager();

  const handleChangeSaturday = () => {
    setCartoonSaturday(!cartoonSaturday);
  };
  const handleChangeSunday = () => {
    setCartoonSunday(!cartoonSunday);
  };

  const heartFavoriteHandler = useCallback((e, cartoonRec) => {
    e.preventDefault();
    toggleCartoonFavorite(cartoonRec);
  }, []);

  const newCartoonList = useMemo(
    () =>
      cartoonList
        .filter(
          ({ sat, sun }) =>
            (cartoonSaturday && sat) || (cartoonSunday && sun),
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
    [cartoonSaturday, cartoonSunday, cartoonList],
  );

  const cartoonListFiltered = isLoading ? [] : newCartoonList;

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
            {cartoonListFiltered.map((cartoonRec) => {
              return (
                <CartoonDetail
                  key={cartoonRec.id}
                  cartoonRec={cartoonRec}
                  onHeartFavoriteHandler={heartFavoriteHandler}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartoons;
