import * as React from 'react';

import StateManagementChild1 from './StateManagementChild1';
import StateManagementChild2 from './StateManagementChild2';
import { useStore } from '../lib/useStore';

const StateManagementParent = () => {

    const [nameState, dispatchName] = useStore("nameState");
    const [ageState, dispatchAge] = useStore("ageState");

    const nameRef = React.useRef();
    const renderCountRef = React.useRef(0);

    React.useEffect(()=>{
        renderCountRef.current += 1;
    })
    
    return (
        <>
        <div>
            <h1>Parent</h1>
            <h3>Render Count: {renderCountRef.current}</h3>
            <div><span>Name: </span><span>{nameState.name}</span></div>
            <div><span>Age: </span><span>{ageState.age}</span></div>
            <div>
                <input type="text" ref={nameRef}/>
                <button onClick={()=>dispatchName({type:"updateName", payload:{name:nameRef.current.value}})}>Change Name</button>
                <button onClick={()=>dispatchAge({type:"incrementAge"})}>Increase Age</button>
                <button onClick={()=>dispatchAge({type:"decrementAge"})}>Decrease Age</button>
            </div>
        </div>
        <StateManagementChild1 />
        <StateManagementChild2 />
        </>
    )
}

export default React.memo(StateManagementParent);