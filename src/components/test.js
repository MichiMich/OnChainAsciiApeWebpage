import { CreateConnectApe, CreateJoinRaffleApe, CreateErrorApe, createSuccessApe } from "./ApeGeneration/GenerateApe.js"
import Background from "./img/backgrounds/sun.png"
import { HandleMoralisWeb3, RunContractJoinRaffle, GetcontractFunction } from "./InteractWithContract.js";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
//styles start
const centered = {
    position: "fixed",
    top: "55%",
    left: "20%",
    transform: "translate(-50%, -50%)",
}
//styles end
var txDone, txResultApe, txResultMessage;
var dynCreatedApe, globalApe;
async function Clickidi() {
    console.log("clickidi entered")
    console.log("moralis hook made")
    var runContractResult = await RunContractJoinRaffle(); //toDo need to add contract from useMoralis Headers, maybe get it via property

    console.log("return wantedApe, givenApeData", runContractResult[0], runContractResult[1]);
    txResultApe = runContractResult[0];
    txResultMessage = runContractResult[1];
    //getCurrentActiveApe(wantedApe, givenApeData);
    txDone = true;
    globalApe = 'connect';
    dynCreatedApe = getCurrentActiveApe('error', 'selfGivenErrorData')
}


function CreateNewApe() {
    console.log("createNewApe")
    console.log("global ape", globalApe)
    if (globalApe == 'connect') {
        dynCreatedApe = getCurrentActiveApe('joinRaffle', 'raffledata')
        globalApe = 'joinRaffle';
    }
    else if (globalApe == 'joinRaffle') {
        dynCreatedApe = getCurrentActiveApe('success', 'successdata')
        globalApe = 'success';
    }
    else if (globalApe == 'success') {
        dynCreatedApe = getCurrentActiveApe('error', 'errordata')
        globalApe = 'error';
    }
    else if (globalApe == 'error' || globalApe == null) {
        dynCreatedApe = getCurrentActiveApe('connect', 'connectdata')
        globalApe = 'connect';
    }
    console.log("setApe", globalApe)
    return (dynCreatedApe);
}

// function HandleClickNewApe() {
//     console.log("handleClickNewApe")



//     if (dynCreatedApe == null) {
//         dynCreatedApe = getCurrentActiveApe('connect', 'mydata')
//     }


//     return (
//         <>
//             <div>
//                 <button onClick={() => CreateNewApe()}>click me</button>
//             </div>
//             <div>
//                 <p>hier sollte der affe kommen</p>
//                 {myUsedApe}
//             </div>
//         </>
//     )
// }


function getCurrentActiveApe(choosenApe, apeData) {
    console.log("choosenape", choosenApe)
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
                <img src={`data:image/svg+xml;utf8,${createSuccessApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
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

    //dont know why but entering this I always got the connect and joinRaffle ape when calling the connect one...
    // const SERVICE_APE_STATES = {
    //     connect:
    //         (<>
    //             {console.log("serviceApeConnect wanted")}
    //             <div style={centered}>
    //                 <img src={`data:image/svg+xml;utf8,${CreateConnectApe()}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
    //             </div>
    //         </>),
    //     joinRaffle:
    //         (<>
    //             {console.log("serviceApejoinRaffle wanted")}
    //             <a >
    //                 <div style={centered}>
    //                     <img src={`data:image/svg+xml;utf8,${CreateJoinRaffleApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
    //                 </div>
    //             </a>
    //         </>),
    //     success:
    //         (<>
    //             {console.log("serviceApesuccess wanted")}
    //             <div style={centered}>
    //                 <img src={`data:image/svg+xml;utf8,${createSuccessApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
    //             </div>
    //         </>),
    //     error:
    //         (<>
    //             {console.log("serviceApeerror wanted")}
    //             <div style={centered}>
    //                 <img src={`data:image/svg+xml;utf8,${CreateErrorApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
    //             </div>
    //         </>),
    // }

    // console.log("returndata", SERVICE_APE_STATES.choosenApe)
    // return (SERVICE_APE_STATES.choosenApe);

}

export function WebpageContent() {
    //const { height, width } = windowdimo();


    return (
        <>
            <HandleMoralisWeb3 />
            <img src={Background} style={{ width: window.innerWidth, height: window.innerHeight, opacity: "1" }}>
            </img>
            <HandleApeAssistent />
        </>
    )
}

var wantedApe, givenApeData;
function HandleApeAssistent() {
    const { account } = useMoralis();

    const myUsedApe = useState(() => getCurrentActiveApe("connect", ""))

    //const [getWantedApe, setWantedApe] = useState();
    console.log("handleApeAssisten ran")
    if (txDone) {
        console.log("txdone")
        // wantedApe = txResultApe;
        // givenApeData = txResultMessage;
    }
    else if (!account) {
        wantedApe = 'connect';
    }
    else {
        wantedApe = 'joinRaffle'
        givenApeData = JSON.stringify(account)
    }


    console.log("apeAssistenthandle entered")
    console.log("wantedApe, apeData", wantedApe, givenApeData)
    // return (getCurrentActiveApe(wantedApe, givenApeData))
    return (myUsedApe);

}

// function Notification(choosenApe, apeData) {

//     console.log("choosenApe", choosenApe)
//     console.log("apeData", apeData)

//     //default value
//     if (choosenApe == null || choosenApe == undefined) {
//         choosenApe = 'connect';
//     }

//     return (
//         <>
//             <HandleMoralisWeb3 />
//             <img src={Background} style={{ width: window.innerWidth, height: window.innerHeight, opacity: "1" }}>
//             </img>
//             {/* <div style={centered}>
//                 <img src={`data:image/svg+xml;utf8,${SERVICE_APE_STATES[choosenApe]}`} style={{ width: width / 2.5, height: width / 2.5, opacity: "1" }} />
//             </div> */}
//             {/* {getCurrentActiveApe('connect', apeData)} */}
//         </>
//     );
// }

export default WebpageContent;