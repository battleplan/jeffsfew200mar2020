import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';
export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
};

const reducerHelper = createReducer(
  initialState,
  on(actions.countIncremented, (s) => ({ current: s.current + 1 })),
  on(actions.countDecremented, (s) => ({ current: s.current - 1 })),
  on(actions.countReset, () => initialState)
);
// when an action is dispatched, it is given the current state, the action, and it must return a new state.
export function reducer(state: CounterState = initialState, action: Action) {
  return reducerHelper(state, action);
}
