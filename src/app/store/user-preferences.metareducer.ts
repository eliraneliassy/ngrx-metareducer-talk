import { UserPreferencesService } from './../user-preferences.service';
import { AppActions } from './app.actions';
import { ActionReducer } from '@ngrx/store';
import { State } from '../reducers';
import { merge, pick } from 'lodash/fp';
export function userPrefernceMetaReducer(userPreferencesService: UserPreferencesService) {
    return function (reducer: ActionReducer<State, AppActions>):
        ActionReducer<State, AppActions> {
        const keys = ['app.shoppingCart'];
        let firstRun = true;

        return function (state, action) {
            let nextState = reducer(state, action);
            if (firstRun) {
                firstRun = true;
                const stateFromStorage = userPreferencesService.getState();
                nextState = merge(stateFromStorage, nextState);
            }

            const stateToSave = pick(keys, nextState);
            userPreferencesService.saveState(stateToSave);

            return nextState;
        };
    };
}
