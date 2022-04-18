import { useMoralis, useWeb3Contract, useWeb3ExecuteFunction } from "react-moralis";
import { abi } from "../constants/Raffle.json";
import 'antd/dist/antd.css';

let createdErrorMessage = null;
var globalEnterRaffle;
var globalResult;
var globalContractProcessor;
var globalOptions;

export async function RunContractJoinRaffle() {
    console.log("runContractjoinraffle entered")
    await globalContractProcessor.fetch({
        params: globalOptions,
        onSuccess: () => {
            handleSuccess();
        },
        onError: (error) => {
            handleError(error)
        }
    });
}



const handleError = (msg) => {
    console.log("erri2", msg.error.message); //this is it, throwing out the correct message...
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


    globalContractProcessor = useWeb3ExecuteFunction();

    globalOptions = {
        contractAddress: "0x75Ab8EeEd318e4294B1AC150C95C852813EBC083",
        functionName: "addAddress",
        abi: abi,
        params: {
            _addressToBeAdded: account
        },
    }


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
