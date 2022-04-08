import React, { useState, useEffect } from 'react';
import { useMoralis } from "react-moralis";
import { RunContractJoinRaffle, HandleMoralisWeb3 } from "./InteractWithContract.js";
import Background from "./img/backgrounds/sun.png"
import { CreateConnectApe, CreateJoinRaffleApe, CreateErrorApe, CreateSuccessApe } from "./ApeGeneration/GenerateApe.js"

//styles start
const centered = {
    position: "fixed",
    top: "55%",
    left: "20%",
    transform: "translate(-50%, -50%)",
}


var txDone, apeData;
export function Example() {
    const [ape, setape] = useState('connect');
    const { account } = useMoralis();
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        console.log("useEffect hook")
        GetAssistentApe(ape, 'myData');
    });


    async function joinRaffle() {
        console.log("clickidi entered")
        console.log("moralis hook made")
        var runContractResult = await RunContractJoinRaffle(); //toDo need to add contract from useMoralis Headers, maybe get it via property

        console.log("return wantedApe, givenApeData");
        console.log("result0", runContractResult[0], "result1", runContractResult[1])
        apeData = runContractResult[1];
        setape(runContractResult[0])
        document.title = `You clicked`;
        txDone = true;
    }

    function GetAssistentApe(choosenApe, apeData) {
        console.log("choosenape", choosenApe)
        console.log("apedatagiven", apeData)
        const windowWidth = window.innerWidth;


        if (choosenApe == 'connect') {
            return (<>
                {console.log("serviceApeConnect wanted")}
                <div style={centered}>
                    <img src={`data:image/svg+xml;utf8,${CreateConnectApe()}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
                </div>
            </>);
        }
        else if (choosenApe == 'joinRaffle') {
            return (<>
                {console.log("serviceApejoinRaffle wanted")}
                <a onClick={() => joinRaffle()}>
                    <div style={centered}>
                        <img src={`data:image/svg+xml;utf8,${CreateJoinRaffleApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
                    </div>
                </a>
            </>);
        }
        else if (choosenApe == 'success') {
            return (<>
                {console.log("serviceApe success wanted")}
                <div style={centered}>
                    <img src={`data:image/svg+xml;utf8,${CreateSuccessApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
                </div>
            </>);
        }
        else if (choosenApe == 'error') {
            return (<>
                {console.log("serviceApe error wanted")}
                <div style={centered}>
                    <img src={`data:image/svg+xml;utf8,${CreateErrorApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
                </div>
            </>)
        }

    }


    // const handleInputChange = (event) => {
    //     setX(event.currentTarget.value);
    // }

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

    if (!txDone) {
        //change between connect and account ape, only if no tx was done so far
        if (account && ape != 'joinRaffle') {
            console.log("account is here, no joinRaffle");
            apeData = JSON.stringify(account)
            setape('joinRaffle');
        }
        else if (!account && ape != 'connect') {
            console.log("no account")
            setape('connect');
        }
    } else if (!account) {
        txDone = false;
    }

    return (
        <>
            <HandleMoralisWeb3 />
            <img src={Background} style={{ width: window.innerWidth, height: window.innerHeight, opacity: "1" }}>
            </img>
            <div>
                {GetAssistentApe(ape, apeData)}
            </div>
        </>
    );
}