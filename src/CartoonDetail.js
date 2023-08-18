import React from "react";
import ImageTogglerOnScroll from "./imageToggleOnScroll";
import { useContext } from "react";
import { FavoriteClickCountContext } from "./FavoriteClickCountContext";


const CartoonDetail = React.memo(({ cartoonRec, onHeartFavoriteHandler }) => {
  const { id, firstName, lastName, bio, favorite } = cartoonRec;
  console.log(`CartoonDetail:${id} ${firstName} ${lastName} ${favorite}`);

  const { incrementFavoriteClickCount } = useContext(FavoriteClickCountContext);

  return (
    <div className="card col-4 cardmin">
      <ImageTogglerOnScroll
        className="card-img-top"
        primaryImg={`/static/cartoons/bw/${firstName}.jpg`}
        secondaryImg={`/static/cartoons/${firstName}.jpg`}
        alt="{firstName} {lastName}"
      />
      <div className="card-body">
        <h4 className="card-title">
          <button
            className={favorite ? "heartredbutton" : "heartdarkbutton"}
            onClick={(e) => {
              onHeartFavoriteHandler(e, cartoonRec);
              incrementFavoriteClickCount();
            }}
          />
          <span>
            {firstName} {lastName}
          </span>
        </h4>
        
        <span>{bio}</span>
      </div>
    </div>
  );
});

export default CartoonDetail;
