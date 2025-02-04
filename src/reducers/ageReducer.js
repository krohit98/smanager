const initialState = {age:25}

export const ageReducer = (state = initialState, action) => {
    switch(action.type){
        case 'incrementAge':
            return {...state, age:state.age + 1};
        case 'decrementAge':
            return {...state, age:state.age - 1}
        default:
            return state
    }
}