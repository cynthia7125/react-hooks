import React from "react";
import ImageTogglerOnScroll from "./imageToggleOnScroll";

const CartoonDetail = ({
    id, firstName, lastName, favorite, bio, onHeartFavoriteHandler,
}) => {
    return (
        <div className="card col-4 cardmin">
            <ImageTogglerOnScroll className="card-img-top" 
            primaryImg={`/static/cartoons/bw/${firstName}.jpg`} 
            secondaryImg={`/static/cartoons/${firstName}.jpg`} 
            alt="{`${firstName} ${lastName}`} picture"/>
            <div className="card-body">
            <h4 className="card-title">
                <button
                data-sessionid={id}
                className={favorite ? 'heartredbutton' : 'heartdarkbutton'}
                onClick={(e) => {
                    onHeartFavoriteHandler(e, !favorite);
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
};

export default CartoonDetail;