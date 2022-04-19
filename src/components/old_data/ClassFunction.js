import { useState } from "react";
import { useMoralis } from "react-moralis";
import { CreateConnectApe, CreateJoinRaffleApe, CreateErrorApe, CreateSuccessApe } from "./ApeGeneration/GenerateApe.js"
import { HandleMoralisWeb3, RunContractJoinRaffle, GetcontractFunction } from "./InteractWithContract.js";
import Background from "./img/backgrounds/sun.png"
//styles start
const centered = {
    position: "fixed",
    top: "55%",
    left: "20%",
    transform: "translate(-50%, -50%)",
}
//styles end
var activeApi, globalrequestedApe, globalApeData, globalDivApe; //Avoid multirendering, only change content if activeApe changes
export function HandleAll() {


    const [nrOfClicks, setNrOfClicks] = useState(0);

    const { account } = useMoralis();

    // const [wantedApe, setWantedApe] = useState(getCurrentActiveApe(requestedApe, 'wrongdata'));

    const [wantedApe, setWantedApe] = useState(handleWantedApe(globalrequestedApe, globalApeData));

    async function Clickidi() {
        console.log("clickidi entered")
        console.log("moralis hook made")
        var runContractResult = await RunContractJoinRaffle(); //toDo need to add contract from useMoralis Headers, maybe get it via property

        console.log("return wantedApe, givenApeData");
        console.log("result0", runContractResult[0], "result1", runContractResult[1])
        //txResultApe = runContractResult[0];
        //txResultMessage = runContractResult[1];
        console.log("right before handle access")
        //getCurrentActiveApe(wantedApe, givenApeData);
        console.log("error set")
        globalrequestedApe = 'error';
        globalDivApe = setWantedApe(getCurrentActiveApe('error', runContractResult[1])) //activating new ape and rerender content with this activated ape
    }


    function handleWantedApe(setApe, apeData) {
        console.log("setapi", setApe)
        console.log("activeapi", activeApi)
        if (setApe == 0 || setApe == undefined || setApe === activeApi) {
            globalDivApe = (getCurrentActiveApe('connect', apeData))
            activeApi = 'connect';
            return;
        }
        else if (setApe == 'error') {
            console.log("error ape requeste");
            globalDivApe = getCurrentActiveApe('error', apeData);
            activeApi = setApe;
        }
        else if (setApe == 'joinRaffle') {
            console.log("need to change ape")
            console.log("setApe", setApe, "activeApe", activeApi)
            globalDivApe = (getCurrentActiveApe(setApe, apeData))
            activeApi = setApe;
            console.log("upadteddata, setApe", setApe, "activeApe", activeApi)
        }
    }





    function getCurrentActiveApe(choosenApe, apeData) {
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
                <a onClick={() => Clickidi()}>
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

    function handleClick() {
        setNrOfClicks(nrOfClicks + 1)
        if (account) {
            setWantedApe(getCurrentActiveApe('joinRaffle', JSON.stringify(account)))
        }
        else {
            setWantedApe(getCurrentActiveApe('connect', 'connectData'))
        }

        console.log('clicked', nrOfClicks);
    }




    // if (requestedApe == null || requestedApe == undefined) {
    //     console.log("null or undefined")
    //     requestedApe = 'connect';
    // }
    // else if (account && requestedApe != activeApi) {
    //     console.log("account set")
    //     requestedApe = 'joinRaffle';
    //     activeApi = 'joinRaffle';
    // }

    // if (account) {
    //     console.log("insidechange")
    //     requestedApe = 'joinRaffle';
    //     globalApeData = JSON.stringify(account);
    //     setWantedApe(getCurrentActiveApe(requestedApe, '0x123'))
    //     activeApi = 'joinRaffle'
    // }
    // else {
    //     requestedApe =
    // }

    //handleWantedApe(requestedApe, globalApeData);

    console.log(wantedApe)

    return (
        <>
            <HandleMoralisWeb3 />
            <img src={Background} style={{ width: window.innerWidth, height: window.innerHeight, opacity: "1" }}>
            </img>
            <div>
                <button onClick={() => handleClick()}>click me {nrOfClicks}</button>

            </div>
            <div>
                {globalDivApe}
            </div>
        </>
    )
}