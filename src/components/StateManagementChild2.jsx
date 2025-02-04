import * as React from 'react';
import { useStore } from '../lib/useStore';

const StateManagementChild2 = () => {
    const [ageState, dispatchAge] = useStore("ageState");
    const renderCountRef = React.useRef(0);

    React.useEffect(()=>{
        renderCountRef.current += 1;
    })
    
    return (
        <div>
            <h1>Child 2</h1>
            <h3>Render Count: {renderCountRef.current}</h3>
            <div><span>Age: </span><span>{ageState.age}</span></div>
            <div>
                <button onClick={()=>dispatchAge({type:"incrementAge"})}>Increase Age</button>
                <button onClick={()=>dispatchAge({type:"decrementAge"})}>Decrease Age</button>
            </div>
        </div>
    )
}

export default React.memo(StateManagementChild2);