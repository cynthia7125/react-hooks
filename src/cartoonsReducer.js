const cartoonsReducer = (state, action) => {
    function updateFavorite(favoriteValue){
      return state.map((item, index) => {
        if (item.id === action.sessionId){
          return {...item, favorite: favoriteValue}
        }
        return item;
      });
    }
    switch (action.type) {
      case "setCartoonList":
        return action.data;
      
      case "favorite":
        return updateFavorite(true);

      case "unfavorite":
        return updateFavorite(false);

      default:
        return state;
    }
  }

export default cartoonsReducer;