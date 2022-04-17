import { useMoralis, useWeb3Contract } from "react-moralis";
import { abi } from "../constants/Raffle.json";
import 'antd/dist/antd.css';

let createdErrorMessage = null;
var globalEnterRaffle;
var globalResult;
export async function RunContractJoinRaffle(contractFunction, errorInformation) {
    console.log("runContractjoinraffle entered")
    const tx = await globalEnterRaffle(
        {
            onSuccess: (tx) => tx.wait(1).then(handleSuccess(tx)),
            //             //onComplete: (tx) => tx.wait(1).then(handleComplete(tx)),
            onError: (tx) => globalResult = handleError(tx, errorInformation),
        }
    )
    console.log("runContractFunction done")
    console.log("result", globalResult);
    return (globalResult);
}

const handleError = async (tx) => {
    console.log("error entered")
    if (tx != undefined || tx != null) {
        //reverted -> require state of solidty
        var createdErrorMessage;
        console.log("tx", tx)
        //get interesting value to show for user ->should be require state
        var txString = JSON.stringify(tx);
        if (txString.search('data') == -1) {
            createdErrorMessage = txString.substring(txString.search('message') + 10, txString.search('stack') - 3); //on all other errors, ToDo should differentiate between both
        }
        else {
            createdErrorMessage = txString.substring(txString.search('message') + 10, txString.search('data') - 3); //fits if require statement is true
        }
        console.log("message", createdErrorMessage);
        return ['error', createdErrorMessage];
        // setApeAssistentData(createdErrorMessage);
        // setApeAssistent('error');
    }
    else {
        createdErrorMessage = "Error occured";
    }
}

const handleSuccess = async (tx) => {
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
