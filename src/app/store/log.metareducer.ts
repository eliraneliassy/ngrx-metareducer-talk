import { State } from './../reducers/index';
import { AppActions } from './app.actions';
import { ActionReducer } from '@ngrx/store';
export function logMetaReducer(reducer: ActionReducer<State, AppActions>):
    ActionReducer<State, AppActions> {
    return function (state, action) {
        console.log(action);
        return reducer(state, action);
    };
}
