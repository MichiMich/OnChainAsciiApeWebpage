import React, { useState, useEffect } from 'react';
import digitalSun from "../img/backgrounds/8bitDigitalSun.jpg"
import asciiForest from '../img/backgrounds/asciiForest.png'


export function TryOut() {
    const [getElement, setElement] = useState('forest');
    const [getHtml, setHtml] = useState();

    //this will be triggered everytime a useState has a change (setElement, setHtml triggered)
    //here we limit it to only be triggered if the getHtml (see line 14 [getHtml]) is changed since this is what our webpage
    //should show then
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked times`;
        console.log("useEffect ran");
    }, [getHtml]); //only re-run if getHtml has changed

    function changeElement() {
        console.log("function changeElement called")
        setElement(chooseNewElement()); //useState of setElement to write a new value
        setHtml(diffHtml()) //useState of setHtml to give it a new value
    }

    //this will return pure html content, you can play with it, insert <p> or <image>, whatever you like
    function diffHtml() {
        if (getElement === 'sun') {
            return (
                <>
                    <div>Now its a ascii forest</div>
                    <div>
                        <img src={asciiForest} style={{ width: 200, height: 200 }}></img>
                    </div>
                </>
            )
        }
        else if (getElement == 'forest') {
            return (
                <>
                    <div>Now its the sun</div>
                    <div>
                        <img src={digitalSun} style={{ width: 200, height: 200 }}></img>
                    </div>
                </>
            )
        }
        else {
            return (<p>This case is undefined</p>)
        }
    }

    function chooseNewElement() {
        if (getElement === 'forest') {
            return ('sun')
        }
        else if (getElement === 'sun') {
            return ('forest')
        }
        else {
            return ('undefined, else')
        }
    }

    return (
        <div>
            <div>
                <button onClick={() => changeElement()}>
                    ChangeElement
                </button>
            </div>
            <div>my htmlElement {getHtml}</div>
        </div>
    );
}