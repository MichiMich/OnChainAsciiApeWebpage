import { stat } from "fs";
import { useState } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { CreateConnectApe, CreateJoinRaffleApe, CreateErrorApe, createSuccessApe } from "./ApeGeneration/ConnectApe.js"
import Background from "./img/backgrounds/sun.png"
import windowdimo from "./windowdimension.js"

//styles start
const centered = {
    position: "fixed",
    top: "55%",
    left: "20%",
    transform: "translate(-50%, -50%)",
}
//styles end

var dyncreatedApe = null;
var width = 100;





export function Notification(choosenApe, apeData) {

    console.log("choosenApe", choosenApe)
    console.log("apeData", apeData)
    const { height, width } = windowdimo();
    const { account } = useMoralis();

    //default value
    if (choosenApe == null || choosenApe == undefined) {
        choosenApe = 'connect';
    }

    const SERVICE_APE_STATES = {
        connect: CreateConnectApe(),
        joinRaffle: CreateJoinRaffleApe(JSON.stringify(account)),
        success: createSuccessApe(),
        error: CreateErrorApe(apeData),
    }

    // if (account) {
    //     choosenApe = 'joinRaffle';
    // }
    // else {
    //     choosenApe = 'connect';
    // }


    return (
        <>
            <img src={Background} style={{ width: width, height: height, opacity: "1" }}>
            </img>
            <div style={centered}>
                <img src={`data:image/svg+xml;utf8,${SERVICE_APE_STATES[choosenApe]}`} style={{ width: width / 2.5, height: width / 2.5, opacity: "1" }} />
            </div>
        </>
    );
}

function Rendering() {

    return (
        Notification('connect')
    );
    // return (
    //     <div>
    //         <Enum state="connect"></Enum>
    //         <Enum state="joinRaffle"></Enum>
    //         <Enum state={getStatus}></Enum>
    //     </div>
    // );
}
