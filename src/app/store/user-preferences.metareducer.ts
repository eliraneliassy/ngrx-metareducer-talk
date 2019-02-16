import { UserPreferencesService } from './../user-preferences.service';
import { AppActions } from './app.actions';
import { ActionReducer } from '@ngrx/store';
import { State } from '../reducers';
import { merge, pick } from 'lodash/fp';
export function userPrefernceMetaReducer(userPreferencesService: UserPreferencesService, keys: string[]) {

    return function (reducer: ActionReducer<State, AppActions>):
        ActionReducer<State, AppActions> {
        return function (state, action) {
            let firstRun = true;
            let nextState = reducer(state, action);
            if (firstRun) {
                firstRun = false;
                const stateFromStorage = userPreferencesService.getState();
                nextState = merge(stateFromStorage, nextState);
            }

            const stateToSave = pick(keys, nextState);
            userPreferencesService.saveState(stateToSave);

            return nextState;
        };
    };
}
