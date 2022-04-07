import { CreateConnectApe, CreateJoinRaffleApe, CreateErrorApe, createSuccessApe } from "./ApeGeneration/GenerateApe.js"
import Background from "./img/backgrounds/sun.png"
import { HandleMoralisWeb3, RunContractJoinRaffle, GetcontractFunction } from "./InteractWithContract.js";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { JoinRaffle } from "./ContractInteraction.js";
//styles start
const centered = {
    position: "fixed",
    top: "55%",
    left: "20%",
    transform: "translate(-50%, -50%)",
}
//styles end
var txDone, txResultApe;
async function Clickidi() {
    console.log("clickidi entered")
    console.log("moralis hook made")
    var runContractResult = await RunContractJoinRaffle(); //toDo need to add contract from useMoralis Headers, maybe get it via property

    console.log("return wantedApe, givenApeData", runContractResult[0], runContractResult[1]);
    wantedApe = runContractResult[0];
    givenApeData = runContractResult[1];
    txDone = true;
    dynCreatedApe = getCurrentActiveApe(wantedApe, givenApeData);
    return () => HandleApeAssistent();
}



function HandleApeUpdate() {
    const [getApe, setApe] = useState(
        getCurrentActiveApeV2()
    )

    useEffect(() => {
        getCurrentActiveApeV2(updatApe)
    }, []);


    return (
        <>
            {getApe}
            <button onClick={forceUpdate}>
                Click to re-render
            </button>
        </>
    )


}


function getCurrentActiveApeV2() {
    console.log("getCurrentActiveApeV2 ran")
    console.log("wanted api, data", wantedApe, givenApeData);

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
}

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
            <HandleApeUpdate />
        </>
    )
}

var wantedApe, givenApeData, dynCreatedApe;
function HandleApeAssistent() {
    const { account } = useMoralis();

    //const [getWantedApe, setWantedApe] = useState();
    console.log("handleApeAssisten ran")

    // useEffect(() => {
    // //     console.log("wantedape", wantedApe)
    //     dynCreatedApe = getCurrentActiveApe(wantedApe, givenApeData)
    //  });

    if (txDone) {
        console.log("txdone")
        wantedApe = txResultApe;
        dynCreatedApe = getCurrentActiveApe(wantedApe, givenApeData);
        // givenApeData = txResultMessage;
    }
    else if (!account) {
        console.log("!account")
        wantedApe = 'connect';
        dynCreatedApe = getCurrentActiveApe(wantedApe, givenApeData);
    }
    else {
        console.log("joinRaffle")
        wantedApe = 'joinRaffle'
        givenApeData = JSON.stringify(account)
        dynCreatedApe = getCurrentActiveApe(wantedApe, givenApeData);
    }



    console.log("apeAssistenthandle entered")
    console.log("wantedApe, apeData", wantedApe, givenApeData)
    return (dynCreatedApe)
    // return (
    //     <><div>
    //         {/*Clicking on the button will force to re-render like force update does */}
    //         <button onClick={forceUpdate}>
    //             Click to re-render
    //         </button>
    //     </div>
    //         <div>
    //             {console.log("forcevalue", forceUpdate)}
    //             {console.log("globalwantedape", globalWantedApe)}
    //         </div>
    //     </>
    // )
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