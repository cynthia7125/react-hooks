const cartoonsReducer = (state, action) => {
    function updateFavorite(favoriteValue){
      return state.cartoonList.map((item, index) => {
        if (item.id === action.id){
          return {...item, favorite: favoriteValue}
        }
        return item;
      });
    }
    switch (action.type) {
      case "setCartoonList":
        return { ...state, cartoonList: action.data, isLoading: false };
      
      case "favorite":
        return { ...state, cartoonList: updateFavorite(true)};

      case "unfavorite":
        return { ...state, cartoonList: updateFavorite(false) };
      
      case "incrementFavoriteClickCount":
        return { ...state, favoriteClickCount: state.favoriteClickCount + 1}; 

      default:
        return state;
    }
  }

export default cartoonsReducer;