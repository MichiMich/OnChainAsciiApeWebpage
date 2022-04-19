import { stat } from "fs";
import { useState } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";



const SERVICE_APE_STATES = {
    connect: <Info />,
    joinRaffle: <p>ciao</p>
}


const NOTIFICATION_STATES = {
    info: <Info />,
    warning: <Warning />,
    error: <Error />,
};

function Info() {
    return (
        <p>infoabc</p>
    )
}
function Warning() {
    return (
        <p>warningabc</p>
    )
}
function Error() {
    return (
        <p>errorabc</p>
    )
}


function Notification(choosenStatus) {

    const { user, isWeb3Enabled, isWeb3EnableLoading, authenticate, isAuthenticated, isAuthenticating, account, logout } = useMoralis();


    if (account) {
        choosenStatus = 'warning';
    }

    console.log("notcall")
    console.log("status", choosenStatus)

    return (
        SERVICE_APE_STATES['connect'],
        NOTIFICATION_STATES[choosenStatus]

    );
}

function Rendering() {


    return (
        Notification('info')
    );
    // return (
    //     <div>
    //         <Enum state="connect"></Enum>
    //         <Enum state="joinRaffle"></Enum>
    //         <Enum state={getStatus}></Enum>
    //     </div>
    // );
}

export default Rendering;