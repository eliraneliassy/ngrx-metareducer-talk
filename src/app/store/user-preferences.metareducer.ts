import { AppActions } from './app.actions';
import { ActionReducer } from '@ngrx/store';
import { State } from '../reducers';
import { merge, pick } from 'lodash/fp';
export function userPrefernceMetaReducer(reducer: ActionReducer<State, AppActions>):
    ActionReducer<State, AppActions> {

    const STATE_KEY = '__state__';
    const keys = ['app.shoppingCart'];
    let firstRun = true;

    return function (state, action) {
        let nextState = reducer(state, action);
        if (firstRun) {
            firstRun = true;
            const stateFromStorage = JSON.parse(localStorage.getItem(STATE_KEY) || '{}');
            nextState = merge(stateFromStorage, nextState);
        }

        const stateToSave = pick(keys, nextState);
        localStorage.setItem(STATE_KEY, JSON.stringify(stateToSave));

        return nextState;
    };
}
