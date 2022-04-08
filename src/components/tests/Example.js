import React, { useState, useEffect } from 'react';

export function TryOut() {
    const [count, setCount] = useState(0);
    const [getElement, setElement] = useState('');
    const [getHtml, setHtml] = useState();

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked times`;
        console.log("useEffect ran");
    }, [getHtml]); //only re-run if getHtml has changed


    function timeout(delay) {
        return new Promise(res => setTimeout(res, delay));
    }

    async function a() {
        console.log("function a")
        console.log("start timeout")
        await timeout(200);
        console.log("timeout done")
        b();
    }

    async function b() {

        console.log("function b")
        console.log("start timeout")
        await timeout(400);
        console.log("timeout done")
        setElement(chooseNewElement());
        setHtml(diffHtml())
        // a(); //endless call after trigger
    }

    function diffHtml() {
        if (getElement == null || getElement == undefined || getElement == '') {
            return (<h1>1</h1>)
        }
        else if (getElement == 'connect') {
            return (<h2>2</h2>)
        }
        else if (getElement == 'joinRaffle') {
            return (<h3>3</h3>)
        }
        else if (getElement == 'error') {
            return (<h4>4</h4>)
        }
        else if (getElement == 'success') {
            return (<h5>5</h5>)
        }
    }

    function chooseNewElement() {
        if (getElement == null || getElement == undefined || getElement == '') {
            return ('connect')
        }
        else if (getElement == 'connect') {
            return ('joinRaffle')
        }
        else if (getElement == 'joinRaffle') {
            return ('error');
        }
        else if (getElement == 'error') {
            return ('success');
        }
        else if (getElement == 'success') {
            return ('connect');
        }
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <div>
                <button onClick={() => a()}>
                    timeout
                </button>
            </div>
            <div>my htmlElement {getHtml}</div>
        </div>
    );
}