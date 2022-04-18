import { stat } from "fs";
import { useState } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";

const SERVICE_APE_STATES = {
    connect: <p>hallo</p>,
    joinRaffle: <p>ciao</p>
}

function Enum({ state }) {
    return <div>{SERVICE_APE_STATES[state]}</div>;
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


function Notification(choosenApe) {

    const { user, isWeb3Enabled, isWeb3EnableLoading, authenticate, isAuthenticated, isAuthenticating, account, logout } = useMoralis();

    var choosenApe = 'connect'

    if (account) {
        choosenApe = 'joinRaffle'
    }



    return (
        <>
            <div>
                {SERVICE_APE_STATES[choosenApe]}
            </div>
        </>
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