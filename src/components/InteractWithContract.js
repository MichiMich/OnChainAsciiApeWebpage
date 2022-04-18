import { useMoralis, useWeb3Contract } from "react-moralis";
import { abi } from "../constants/Raffle.json";
import 'antd/dist/antd.css';

let createdErrorMessage = null;
var globalEnterRaffle;
var globalResult;
export async function RunContractJoinRaffle(contractFunction, errorInformation) {
    console.log("runContractjoinraffle entered")
    const tx1 = await globalEnterRaffle(
        {
            onSuccess: (tx) => tx.wait(1).then(handleSuccess(tx1)),
            //             //onComplete: (tx) => tx.wait(1).then(handleComplete(tx)),
            onError: (tx) => globalResult = handleError(tx, errorInformation),
        }
    )
    console.log("runContractFunction done")
    console.log("result", globalResult);
    return (globalResult);
}




const handleError = async (tx) => {
    var createdErrorMessage;
    var wantedAssistentApe = 'error';
    console.log("tx from interaction", tx);
    if (tx.error != undefined) {
        createdErrorMessage = tx.error.message;
        console.log("filtered error message", createdErrorMessage);
        wantedAssistentApe = 'rejoin';
    }
    else if (tx.message != undefined) {
        //tx not fired, could be user cancel transaction
        createdErrorMessage = tx.message;
        console.log("tx message", tx.createdErrorMessage);
    }
    else {
        createdErrorMessage = "undefined error occured";
    }
    return [wantedAssistentApe, createdErrorMessage];

}

const handleSuccess = async (tx) => {
    await tx.wait(1);
    console.log("success entered")
    globalResult = ['success', tx];
    return ['success', tx];
    // setApeAssistent = 'success';
}

const handleComplete = async (tx) => {
    console.log("complete entered")
    await tx.wait(1)
    console.log("complete wait done")
}


export function GetcontractFunction(addressToBeAdded) {
    console.log("getContractfunction entered")
    const { runContractFunction: enterRaffle, } = useWeb3Contract({
        abi: abi,
        contractAddress: "0x75Ab8EeEd318e4294B1AC150C95C852813EBC083",
        functionName: "addAddress",
        params: {
            _addressToBeAdded: addressToBeAdded
        },

    }
    );
    console.log("useWEb3hook done")
    return (enterRaffle);
}

export function HandleMoralisWeb3() {

    const { user, isWeb3Enabled, isWeb3EnableLoading, authenticate, isAuthenticated, isAuthenticating, account, logout } = useMoralis();


    const { runContractFunction: enterRaffle, data: enterTxResponse, error, isLoading, isFetching } = useWeb3Contract({
        abi: abi,
        contractAddress: "0x75Ab8EeEd318e4294B1AC150C95C852813EBC083",
        functionName: "addAddress",
        params: {
            _addressToBeAdded: account
        },

    }
    );

    globalEnterRaffle = enterRaffle;

    // const InteractContract = async () => {
    //     const tx = await enterRaffle(
    //         {
    //             onSuccess: (tx) => tx.wait(1).then(handleSuccess(tx)),
    //             //onComplete: (tx) => tx.wait(1).then(handleComplete(tx)),
    //             //             //onError: () => { handleError(JSON.stringify(error)) },
    //             onError: (tx) => handleError(tx, error),
    //         }
    //     )

    // }

    return;// (enterRaffle);




    /*
        if (allowApeClick) {
            return (
                <>
                    <div style={{ width: width, height: height }}>
                        <img src={Background} style={{ width: width, height: height, opacity: "1" }} />
                        <div style={centered}>
                            <a type="primary" onClick={async () =>
                                InteractContract()
                            } disabled={isLoading || isFetching}>
                                <img src={`data:image/svg+xml;utf8,${dyncreatedApe}`} style={{ width: width / 2.5, height: width / 2.5, opacity: "1" }} />
                            </a>
                        </div>
                    </div>
                </>
            )
        }
        return (
            <>
                <div style={{ width: width, height: height }}>
                    <img src={Background} style={{ width: width, height: height, opacity: "1" }}>
                    </img>
                    <div style={centered}>
                        <img src={`data:image/svg+xml;utf8,${dyncreatedApe}`} style={{ width: width / 2.5, height: width / 2.5, opacity: "1" }} />
                    </div>
                </div>
            </>
        )
    
    */

    // if (account || isAuthenticated) {
    //     return (
    //         <a type="primary" onClick={async () =>
    //             InteractContract()
    //         } disabled={isLoading || isFetching}>Join Raffle
    //             {handleResults()}</a>)

    // }
    // return (
    //     <div>abc</div>
    // )



}




// export function MintPage() {

//     const { account, isAuthenticate } = useMoralis();

//     if (account || isAuthenticate) {
//         return (
//             <>
//                 <div>Connected</div>
//                 <InteractWithContract />
//             </>
//         )
//     }
//     else {
//         return (
//             <>
//                 <p>not connected</p>
//             </>)
//     }
// }
