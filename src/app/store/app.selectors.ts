import { State } from './../reducers/index';
import { createSelector } from '@ngrx/store';

export const selectAppState = (state: State) => state.app;

export const getFeed = createSelector(
    selectAppState,
    (app) => app.items
);

export const getIsLoading = createSelector(
    selectAppState,
    (app) => app.isLoading
);

export const getShoppingCart = createSelector(
    selectAppState,
    (app) => app.shoppingCart
);
