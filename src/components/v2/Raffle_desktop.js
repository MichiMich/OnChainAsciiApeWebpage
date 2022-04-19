import { useEffect, useState } from "react";
import { HandleMoralisWeb3, RunContractJoinRaffle } from "../InteractWithContract.js";
import { CreateConnectApe, CreateJoinRaffleApe, CreateErrorApe, CreateSuccessApe, CreateRejoinApe } from "../ApeGeneration/GenerateApe.js"
import Background from "../img/backgrounds/sun.png"
import { useMoralis } from "react-moralis";
import useWindowDimensions from "../windowdimension.js";

const svgCentered = {
    position: "fixed", top: "15%", left: "10%"
}

export function RaffleDesktop() {

    console.log("RaffleDesktop");
    const [getApeHtml, setApeHtml] = useState(getCurrentActiveApe('connect', ''));//useState(getCurrentActiveApe('connect', ''));
    const { account } = useMoralis();
    const { height, width } = useWindowDimensions(); //otional, adapting the window positon and the ape, renders a lot, updates the window width on every change


    useEffect(() => {
        console.log("account", account);
    }, [getApeHtml]); //only re-run if getApeHtml has changed


    useEffect(() => {
        console.log("useEffect mint account ran, account", account);
        //if (!getTxDone && account) {
        if (account) {
            console.log("trigger ape useEffect account")
            setApeHtml(getCurrentActiveApe('joinRaffle', JSON.stringify(account)));
        }
        else {
            console.log("useEffect mint account, else")
            console.log("trigger ape useEffect !account")
            setApeHtml(getCurrentActiveApe('connect', '', width, height));
        }
    }, [account]); //only re-run if getApeHtml has changed


    function getCurrentActiveApe(choosenApe, apeData, width, height) {
        console.log("choosenape", choosenApe)
        console.log("apedatagiven", apeData)
        const windowWidth = 1351; //set to default size, which should fix pretty good otherwise dynamic: window.innerWidth
        if (width != null && width != undefined && height != null && height != undefined) {
            console.log("windowidth", window.innerWidth)
            console.log("width: ", width, "\nheight: ", height);
            if (width > height) {
                console.log("width > height");
            }
            else {
                console.log("height > width");
            }
        }


        if (choosenApe == 'connect') {
            return (<>
                <div style={svgCentered}>
                    <img src={`data:image/svg+xml;utf8,${CreateConnectApe()}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
                </div>
            </>);
        }
        else if (choosenApe == 'joinRaffle') {
            return (<>
                <a onClick={() => joinRaffle()}>
                    <div style={svgCentered}>
                        <img src={`data:image/svg+xml;utf8,${CreateJoinRaffleApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
                    </div>
                </a>
            </>);
        }
        else if (choosenApe == 'success') {
            return (<>
                <div style={svgCentered}>
                    <img src={`data:image/svg+xml;utf8,${CreateSuccessApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
                </div>
            </>);
        }
        else if (choosenApe == 'rejoin') {
            return (<>
                <div style={svgCentered}>
                    <img src={`data:image/svg+xml;utf8,${CreateRejoinApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
                </div>
            </>)
        }
        else if (choosenApe == 'error') {
            return (<>
                <div style={svgCentered}>
                    <img src={`data:image/svg+xml;utf8,${CreateErrorApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
                </div>
            </>)
        }

    }

    async function joinRaffle() {
        var runContractResult = await RunContractJoinRaffle(); //toDo need to add contract from useMoralis Headers, maybe get it via property
        setApeHtml(getCurrentActiveApe(runContractResult[0], runContractResult[1])); //create a new ape depending on result, success or error ape (runContractResult[0]) with given success or error information (runContractResult[1])
    }


    return (
        <>
            <HandleMoralisWeb3 />
            <img src={Background} style={{ width: window.innerWidth, height: window.innerHeight, opacity: "1" }}>
            </img>
            <div>
                {getApeHtml}
            </div>
        </>
    )


}