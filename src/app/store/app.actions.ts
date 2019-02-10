import { Action } from '@ngrx/store';

export enum AppActionTypes {
  FETCH_FEED = '[FEED] Load Feed',
  FETCH_FEED_SUCCESS = '[FEED] Load Feed Success',
  ADD_TO_CART = '[CART] Add To Cart'

}

export class FetchFeed implements Action {
  readonly type = AppActionTypes.FETCH_FEED;
}

export class FetchFeedSuccess implements Action {
  readonly type = AppActionTypes.FETCH_FEED_SUCCESS;
  constructor(public payload: Item[]) { }
}

export class AddToCart implements Action {
  readonly type = AppActionTypes.ADD_TO_CART;
  constructor(public payload: Item) { }
}


export type AppActions = FetchFeed | FetchFeedSuccess | AddToCart;
