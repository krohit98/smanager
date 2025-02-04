import { createContext } from "react";
import { store } from "../utils/store";
import StateManagementParent from "./StateManagementParent";

const StoreContext = createContext();

const StateManagementWrapper = () => {
    return(
        <StoreContext.Provider value={store} >
            <StateManagementParent />
        </StoreContext.Provider>
    )
}

export {StoreContext};
export default StateManagementWrapper;