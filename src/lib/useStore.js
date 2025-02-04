import * as React from 'react';
import { StoreContext } from '../components/StateManagementWrapper';

export const useStore = (key) => {

    const store = React.useContext(StoreContext);

    const [state, setState] = React.useState(store.getState()[key]);
    const prevState = React.useRef();

    // granularity - only updates state (and forces component rerender) if associated state changed
    const updateState = (newStateValue) => {
        if(newStateValue[key] !== prevState.current){
            setState(newStateValue[key])
        }
    }

    function dispatch(action){
        store.dispatch(action)
    }

    React.useEffect(()=>{
        let unsubscribe = store.subscribe(updateState);
        return ()=>unsubscribe();
    },[])

    React.useEffect(()=>{
        prevState.current = state;
    },[state])

    return [state, dispatch];
}