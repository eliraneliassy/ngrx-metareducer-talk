import * as fromApp from '../store';


export interface AppState {
  items: Item[];
  shoppingCart: Item[];
  isLoading: boolean;

}

export const initialState: AppState = {
  items: [],
  shoppingCart: [],
  isLoading: false
};

export function reducer(state = initialState, action: fromApp.AppActions): AppState {
  switch (action.type) {
    case (fromApp.AppActionTypes.FETCH_FEED): {
      return { ...state, isLoading: true };
    }
    case (fromApp.AppActionTypes.FETCH_FEED_SUCCESS): {
      return { ...state, items: action.payload, isLoading: false };
    }
    case (fromApp.AppActionTypes.ADD_TO_CART): {
      return { ...state, shoppingCart: [...state.shoppingCart, action.payload] };
    }
    default:
      return state;
  }
}
