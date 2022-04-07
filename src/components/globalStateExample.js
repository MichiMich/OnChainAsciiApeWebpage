import React from 'react';
import { store, useGlobalState } from 'state-pool';


store.setState("count", 0);

function ClicksCounter(props) {
    const [count, setCount] = useGlobalState("count");

    let incrementCount = (e) => {
        setCount(count + 1)
    }

    return (
        <div>
            Count: {count}
            <br />
            <button onClick={incrementCount}>Click</button>
        </div>
    );
}

export default ClicksCounter;