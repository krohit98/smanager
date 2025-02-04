import * as React from 'react';
import { useStore } from '../lib/useStore';

const StateManagementChild1 = () => {
    const [nameState, dispatchName] = useStore("nameState");

    const nameRef = React.useRef();
    const renderCountRef = React.useRef(0);

    React.useEffect(()=>{
        renderCountRef.current += 1;
    })
    
    return (
        <div>
            <h1>Child 1</h1>
            <h3>Render Count: {renderCountRef.current}</h3>
            <div><span>Name: </span><span>{nameState.name}</span></div>
            <div>
                <input type="text" ref={nameRef}/>
                <button onClick={()=>dispatchName({type:"updateName",payload:{name:nameRef.current.value}})}>Change Name</button>
            </div>
        </div>
    )
}

export default React.memo(StateManagementChild1);