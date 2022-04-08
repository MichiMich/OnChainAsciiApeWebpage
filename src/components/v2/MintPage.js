import { useEffect, useState } from "react";
import { HandleMoralisWeb3, RunContractJoinRaffle } from "../InteractWithContract.js";
import { CreateConnectApe, CreateJoinRaffleApe, CreateErrorApe, CreateSuccessApe } from "../ApeGeneration/GenerateApe.js"
import Background from "../img/backgrounds/sun.png"
import { useMoralis } from "react-moralis";


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
    console.log("apedatagiven", apeData)
    const windowWidth = window.innerWidth;

    if (choosenApe == 'connect') {
        return (<>
            {console.log("serviceApeConnect wanted")}
            <div style={centered}>
                <img src={`data:image/svg+xml;utf8,${CreateConnectApe()}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
            </div>
        </>);
    }
    else if (choosenApe == 'joinRaffle') {
        return (<>
            {console.log("serviceApejoinRaffle wanted")}
            <a>
                <div style={centered}>
                    <img src={`data:image/svg+xml;utf8,${CreateJoinRaffleApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
                </div>
            </a>
        </>);
    }
    else if (choosenApe == 'success') {
        return (<>
            {console.log("serviceApe success wanted")}
            <div style={centered}>
                <img src={`data:image/svg+xml;utf8,${CreateSuccessApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
            </div>
        </>);
    }
    else if (choosenApe == 'error') {
        return (<>
            {console.log("serviceApe error wanted")}
            <div style={centered}>
                <img src={`data:image/svg+xml;utf8,${CreateErrorApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
            </div>
        </>)
    }

}

function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
}



export function MintPage() {

    const [getActiveApe, setActiveApe] = useState('connect');
    const [getApeHtml, setApeHtml] = useState();//useState(getCurrentActiveApe('connect', ''));
    const { account } = useMoralis();


    useEffect(() => {
        console.log("useEffect getApeHtml ran");
        console.log("getActiveApe", getActiveApe);
        console.log("account", account);


    }, [getApeHtml || account]); //only re-run if getApeHtml has changed


    useEffect(() => {
        console.log("useEffect mint account ran");
        console.log("getActiveApe", getActiveApe);
        console.log("account", account);
        if (account) {
            setApeHtml(getCurrentActiveApe('joinRaffle', JSON.stringify(account)));
        }
    }, [account]); //only re-run if getApeHtml has changed

    // if (account) {
    //     console.log("account", account)
    // }
    // else {
    //     console.log("!account", account)
    // }

    //HandleChange();

    async function HandleChange() {
        if (account && (getApeHtml != 'joinRaffle')) {
            //user logged in with wallet
            console.log("user logged in")
            setActiveApe('joinRaffle');
            setApeHtml(getCurrentActiveApe(getActiveApe, 'abcdefghijkl'));
            console.log("use timeout");
            await timeout(2000);

        }
    }

    function changeApeConst() {
        if (getActiveApe == 'connect') {
            setActiveApe('joinRaffle');
        }
        else {
            setActiveApe('connect')
        }

        setApeHtml(getCurrentActiveApe(getActiveApe, 'abcdefghijk'));
    }




    return (
        <>
            <HandleMoralisWeb3 />
            <img src={Background} style={{ width: window.innerWidth, height: window.innerHeight, opacity: "1" }}>
            </img>
            <button onClick={changeApeConst}>change ape</button>
            <div>
                {getApeHtml}
            </div>
        </>
    )


}