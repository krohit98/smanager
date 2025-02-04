const initialState = {name:"Rohit"}

export const nameReducer = (state = initialState, action) => {
    switch(action.type){
        case 'updateName':
            return {...state, name:action.payload.name};
        default:
            return state
    }
}