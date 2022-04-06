import { useMoralis, useWeb3Contract } from "react-moralis";
import { abi } from "../constants/Raffle.json";
import 'antd/dist/antd.css';

let createdErrorMessage = null;

async function runtContractJoinRaffle(contractFunction, errorInformation) {

    const tx = await contractFunction(
        {
            onSuccess: (tx) => tx.wait(1).then(handleSuccess(tx)),
            //             //onComplete: (tx) => tx.wait(1).then(handleComplete(tx)),
            onError: (tx) => handleError(tx, errorInformation),
        }
    )

}

const handleError = async (tx) => {
    console.log("error entered")
    if (tx != undefined || tx != null) {
        //reverted -> require state of solidty
        console.log("tx", tx)
        //get interesting value to show for user ->should be require state
        var txString = JSON.stringify(tx);
        createdErrorMessage = txString.substring(txString.search('message') + 10, txString.search('data') - 3);
        console.log("message", createdErrorMessage);
        // setApeAssistentData(createdErrorMessage);
        // setApeAssistent('error');
    }
    else {
        createdErrorMessage = "Error occured";
    }
}

const handleSuccess = async (tx) => {
    console.log("success entered")
    // setApeAssistent = 'success';
}

const handleComplete = async (tx) => {
    console.log("complete entered")
    await tx.wait(1)
    console.log("complete wait done")
}


export function HandleMoralisWeb3() {

    const { user, isWeb3Enabled, isWeb3EnableLoading, authenticate, isAuthenticated, isAuthenticating, account, logout } = useMoralis();

    if (account) {
        // setApeAssistent = 'joinRaffle';
        // setApeAssistentData(JSON.stringify(account));
    }

    const { runContractFunction: enterRaffle, data: enterTxResponse, error, isLoading, isFetching } = useWeb3Contract({
        abi: abi,
        contractAddress: "0x75Ab8EeEd318e4294B1AC150C95C852813EBC083",
        functionName: "addAddress",
        params: {
            _addressToBeAdded: account
        },

    }
    );



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

    return;




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
