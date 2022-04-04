import { useMoralis, useWeb3Contract } from "react-moralis";
import { abi } from "../constants/Raffle.json";
import { Button, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { async } from "q";

//imports ape specific start
import Background from "./img/backgrounds/sun.png"
//import Background from "./img/backgrounds/mariocut2.jpg";
import JoinRaffleApe from "./img/SpeekingApes/TwoPartApeJoinRaffle.svg";
import ConnectApe from "./img/SpeekingApes/TwoPartApeConnect.svg";
import windowdimo from "./windowdimension.js"
//svg dyn creation
import { CreateConnectApe, CreateJoinRaffleApe, CreateErrorApe } from "./ApeGeneration/ConnectApe.js"
import { useEffect } from 'react';

//imports ape specific end


let showResult = false

//styles start
const centered = {
    position: "fixed",
    top: "55%",
    left: "20%",
    transform: "translate(-50%, -50%)",
}
//styles end

let createdErrorMessage = null;
export function InteractWithContract() {
    const { user, isWeb3Enabled, isWeb3EnableLoading, authenticate, isAuthenticated, isAuthenticating, account, logout } = useMoralis();

    let [txErrorOccured, setTxError] = useState();

    //ape specific start
    let ActiveApe = ConnectApe;

    let dyncreatedApe = null;


    useEffect(() => {
        ActiveApe = ConnectApe;
        dyncreatedApe = null;
        console.log("useEffect ran");

    });

    if (txErrorOccured) {
        dyncreatedApe = CreateErrorApe(createdErrorMessage);
    }
    else if (!account || isAuthenticated) {
        dyncreatedApe = CreateConnectApe();
    }
    else {
        dyncreatedApe = CreateJoinRaffleApe(JSON.stringify(account));
    }

    // function createDynNeededApe(account, txErrorOccured) {
    //     if (!account) {
    //         console.log("not account")
    //         dyncreatedApe = CreateConnectApe();
    //         ActiveApe = ConnectApe;
    //     }
    //     else if (txErrorOccured) {
    //         console.log("tx error")
    //         //dyncreatedApe = CreateErrorApe("error")
    //         //console.log("dynCreatedApe", dyncreatedApe);
    //     }
    //     else {
    //         console.log("make raffle ape")
    //         ActiveApe = JoinRaffleApe;
    //         dyncreatedApe = CreateJoinRaffleApe(JSON.stringify(account));
    //     }
    // }




    //ape specific end
    //window specific start
    //use of useEffect() in windowdimension.js ->useWindowDimensions which updates the window data
    const { height, width } = windowdimo()
    //window specifi end



    const handleSuccess = async (tx) => {
        console.log("success entered")
        console.log("succes tx", tx)
        console.log("success wait done")
        //need to do a tx wait
        console.log("success of trx")
        showResult = true;
    }

    const handleComplete = async (tx) => {
        console.log("complete entered")
        await tx.wait(1)
        console.log("complete wait done")
    }

    const handleError = async (tx) => {
        console.log("error entered")
        if (tx != undefined || tx != null) {
            //reverted -> require state of solidty
            console.log("tx", tx)
            //get interesting value to show for user ->should be require state
            var txString = JSON.stringify(tx);
            var errorMessage = txString.substring(txString.search('message') + 10, txString.search('data') - 3);
            console.log("message", errorMessage);
            //now create ape with information in it
            //CreateErrorApe(errorMessage);
            createdErrorMessage = errorMessage;
            setTxError(true);
            console.log("txErrorState", txErrorOccured)
        }
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


    const handleResults = () => {
        //here we get the resulte data
        if (error) {
            return (<div>
                {error?.message.substring(error?.message.search('message') + 10, error?.message.search('data') - 3)}
            </div>)
        }
    }

    // const InteractContract = async () => {
    //     await enterRaffle(
    //         {
    //             onSuccess: handleSuccess,
    //             onComplete: handleComplete,
    //             //             //onError: () => { handleError(JSON.stringify(error)) },
    //             onError: handleError,
    //         }
    //     )
    //     console.log("web3data", enterRaffle)
    //     console.log("web3data", isLoading)
    //     console.log("web3data", isFetching)
    // }

    const InteractContract = async () => {
        const tx = await enterRaffle(
            {
                onSuccess: (tx) => tx.wait(1).then(handleSuccess(tx)),
                //onComplete: (tx) => tx.wait(1).then(handleComplete(tx)),
                //             //onError: () => { handleError(JSON.stringify(error)) },
                onError: (tx) => handleError(tx, error),
            }
        )

    }


    // if (showResult) {
    //     return (
    //         <div>You joined</div>
    //     )
    // }


    if (account || isAuthenticated) {
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
                <a type="primary" onClick={async () =>
                    InteractContract()
                } disabled={isLoading || isFetching}>Join Raffle
                    {handleResults()}</a>

                <div style={centered}>
                    <img src={`data:image/svg+xml;utf8,${dyncreatedApe}`} style={{ width: width / 2.5, height: width / 2.5, opacity: "1" }} />
                </div>
            </div>
        </>
    )



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
