class Store{
    constructor(reducer, initialState = {}){
        this.state = initialState;
        this.reducer = reducer;
        // using Set to prevent same callbacks being subscribed multiple times. If that is desirable, use Array.
        this.subscriberList = new Set([]);
        this.dispatch({type:"store init"})
    }

    // reactive - executes subscribed callbacks on state update
    #notifySubscribers(){
        Array.from(this.subscriberList).forEach(subscriber => subscriber(this.getState()))
    }

    // predictable - updates state only through specified actions passed to reducers
    // immutable - makes new object to update state every time
    dispatch(action){
        let newState = this.reducer(this.state, action);
        if(newState !== this.state){
            this.state = {...newState};
            this.#notifySubscribers()
        }
    }

    // return a non-configurable, non-enumerable and non-writable copy of state
    getState(){
        return Object.freeze({...this.state})
    }

    // add cb to subscribers list and return function to unsubscribe
    subscribe(cb){
        this.subscriberList.add(cb)

        return ()=>new Set(Array.from(this.subscriberList).filter(subscribedCb => subscribedCb !== cb))
    }
}

export default Store;