import React, { useState, useEffect } from 'react';
import { GetAssistentApe } from './AssistentApe.js'

export function Example() {
    const [ape, setape] = useState('connect');

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        GetAssistentApe(ape, 'myData')
    });


    function decideTheApe() {
        if (ape == null || ape == undefined) {
            return ('connect')
        }
        else if (ape == 'connect') {
            return ('joinRaffle')
        }
        else if (ape == 'joinRaffle') {
            return ('error');
        }
        else if (ape == 'error') {
            return ('success');
        }
        else if (ape == 'success') {
            return ('connect');
        }
    }


    return (
        <>
            <div>
                <button onClick={() => setape(decideTheApe())}>
                    Click me
                </button>
            </div>
            <div>
                {GetAssistentApe(ape, 'myData')}
            </div>
        </>
    );
}