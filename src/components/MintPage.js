import { Image, Button } from 'antd';
import Background from "./img/backgrounds/sun.png"
//import Background from "./img/backgrounds/mariocut2.jpg";
import JoinRaffleApe from "./img/SpeekingApes/TwoPartApeJoinRaffle.svg";
import ConnectApe from "./img/SpeekingApes/TwoPartApeConnect.svg";
import windowdimo from "./windowdimension.js"
import React, { useState } from "react";
//svg dyn creation
import { CreateConnectApe, CreateJoinRaffleApe } from "./ApeGeneration/ConnectApe.js"

//for interacting with contract
import { useMoralis, useWeb3Contract } from "react-moralis";
import abi from "../constants/Raffle.json";
import { useEffect } from 'react';
document.title = "AsciiApes";

const centered = {
    position: "fixed",
    top: "55%",
    left: "20%",
    transform: "translate(-50%, -50%)",
}
const backgroundImage = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "contain",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    opacity: "1"

}





let showResult = false
function MintPage() {
    const { user, isWeb3Enabled, isWeb3EnableLoading, authenticate, isAuthenticated, isAuthenticating, account, logout } = useMoralis();



    //use of useEffect() in windowdimension.js ->useWindowDimensions which updates the window data
    const { height, width } = windowdimo()

    const [count, setCount] = useState(0);

    let ActiveApe = ConnectApe;

    let dyncreatedApe = null;

    useEffect(() => {
        ActiveApe = ConnectApe;
        dyncreatedApe = null;

    });

    if (!account || isAuthenticated) {
        dyncreatedApe = CreateConnectApe();
        ActiveApe = ConnectApe;
    }
    else {
        ActiveApe = JoinRaffleApe;
        dyncreatedApe = CreateJoinRaffleApe(JSON.stringify(account));
    }



    //interact start
    const { runContractFunction: enterRaffle, data: enterTxResponse, error, isLoading, isFetching } = useWeb3Contract({
        abi: abi,
        contractAddress: "0x75Ab8EeEd318e4294B1AC150C95C852813EBC083",
        functionName: "addAddress",
        params: {
            _addressToBeAdded: account
        },
    }

    );

    const InteractContract = async () => {
        console.log("abi", abi);
        console.log("web3en", isWeb3Enabled)
        await enterRaffle(
            {
                onSuccess: alert("success"),
                onComplete: alert("complete"),
                //onError: () => { handleError(JSON.stringify(error)) },
                onError: alert("error")
            }
        )
    }

    // async function InteractContract() {
    //     console.log("enter raffle")

    //     await enterRaffle(
    //         {
    //             onSuccess: alert("success"),
    //             onComplete: alert("complete"),
    //             //onError: () => { handleError(JSON.stringify(error)) },
    //             onError: alert("onerror")
    //         }
    //     )
    //     console.log("end raffle")
    // }

    // const InteractContract = async () => {
    //     console.log("enter raffle")
    //     if (isFetching){
    //         console.log("fetching")
    //     }
    //     await enterRaffle(
    //         {
    //             onSuccess: alert("success"),
    //             onComplete: alert("complete"),
    //             //onError: () => { handleError(JSON.stringify(error)) },
    //             onError: alert("onerror")
    //         }
    //     )
    //     console.log("end raffle")
    // }
    //interact end



    if (account || isAuthenticated) {
        return (
            <div style={{ width: width, height: height }}>
                <img src={Background} style={{ width: width, height: height, opacity: "1" }}>
                </img>


                <div style={centered}>
                    <img src={`data:image/svg+xml;utf8,${dyncreatedApe}`} style={{ width: width / 2.5, height: width / 2.5, opacity: "1" }} />

                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto"
                    onClick={async () =>
                        await InteractContract({
                            onSuccess: alert("successi"),
                        })
                    }
                    disabled={isLoading || isFetching}
                >enter raffle</button>
                {/* <a type="primary" onClick={async () =>
                    interact()
                } disabled={isLoading || isFetching}>raffli
                </a>) */}

            </div>
        )
    }
    return (
        <>
            <div style={{ width: width, height: height }}>
                <img src={Background} style={{ width: width, height: height, opacity: "1" }}>
                </img>

                {/* <div style={centered}>
                    <a >
                        <img src={ActiveApe} style={{ width: width / 2.5, height: width / 2.5, opacity: "1" }} />
                    </a>
                </div> */}

                <div style={centered}>
                    <img src={`data:image/svg+xml;utf8,${dyncreatedApe}`} style={{ width: width / 2.5, height: width / 2.5, opacity: "1" }} />
                </div>


            </div>



        </>
    )

}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Component />, rootElement);


export default MintPage;