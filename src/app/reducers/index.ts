import * as fromCounter from './counter.reducer';
/*
state = {
  counter: {
    current: 0
  }
}
*/

export interface AppState {
  counter: fromCounter.CounterState;
}


export const reducers = {
  counter: fromCounter.reducer
};
