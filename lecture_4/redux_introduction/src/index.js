import {createStore} from 'redux';

const initialState = {sum: 0, nrOfAdditions: 0};

const reducer = (previousState = initialState, action) => {
  const addend = action.payload;
  switch(action.type) {
    case 'ADD': {
      return {
        sum: previousState.sum + addend,
        nrOfAdditions: previousState.nrOfAdditions + 1
      };
    }
  }
};

let store = createStore(reducer);

store.subscribe(() => {
  console.log('Got new state', store.getState());
});

store.dispatch({type: 'ADD', payload: 5});
store.dispatch({type: 'ADD', payload: 3});
