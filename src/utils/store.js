// import ReactiveStore from '../lib/reactiveStateManager';

// export const store = new ReactiveStore({name:"rohit", age:25});

import Store from "../lib/stateManager";
import { nameReducer } from "../reducers/nameReducer";
import { ageReducer } from "../reducers/ageReducer";

const rootReducer = (state={}, action) => ({
    nameState:nameReducer(state.nameState, action),
    ageState:ageReducer(state.ageState, action)
})

export const store = new Store(rootReducer);


