import { CreateConnectApe, CreateJoinRaffleApe, CreateErrorApe, createSuccessApe } from "./ApeGeneration/GenerateApe.js"
import Background from "./img/backgrounds/sun.png"
import { HandleMoralisWeb3, runtContractJoinRaffle } from "./InteractWithContract.js";

//styles start
const centered = {
    position: "fixed",
    top: "55%",
    left: "20%",
    transform: "translate(-50%, -50%)",
}
//styles end

function getCurrentActiveApe(choosenApe, apeData) {
    console.log("choosenape", choosenApe)
    const windowWidth = window.innerWidth;
    console.log("currentcreatedape", CreateConnectApe())
    return (<div style={centered}>
        <img src={`data:image/svg+xml;utf8,${CreateConnectApe()}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
    </div>)
    /*
        if (choosenApe == 'connect') {
            return (<>
                {console.log("serviceApeConnect wanted")}
                <div style={centered}>
                    <img src={`data:image/svg+xml;utf8,${CreateConnectApe()}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
                </div>
                {console.log("apiapi", CreateConnectApe())}
            </>);
        }
        else if (choosenApe == 'joinRaffle') {
            return (<>
                {console.log("serviceApejoinRaffle wanted")}
                <a >
                    <div style={centered}>
                        <img src={`data:image/svg+xml;utf8,${CreateJoinRaffleApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
                    </div>
                </a>
            </>);
        }
        else if (choosenApe == 'success') {
            return (<>
                {console.log("serviceApesuccess wanted")}
                <div style={centered}>
                    <img src={`data:image/svg+xml;utf8,${createSuccessApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
                </div>
            </>);
        }
        else if (choosenApe == 'error') {
            return (<>
                {console.log("serviceApeerror wanted")}
                <div style={centered}>
                    <img src={`data:image/svg+xml;utf8,${CreateErrorApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
                </div>
            </>)
        }
    */
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


function HandleApeAssistent() {
    console.log("apeAssistenthandle entered")
    var generatedapedata = getCurrentActiveApe("connect", "mydata");
    console.log("promisedati", generatedapedata);
    return (generatedapedata)
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