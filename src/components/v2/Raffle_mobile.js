import { useEffect, useState } from "react";
import { HandleMoralisWeb3, RunContractJoinRaffle } from "../InteractWithContract.js";
import { CreateConnectApe, CreateJoinRaffleApe, CreateErrorApe, CreateSuccessApe, CreateRejoinApe } from "../ApeGeneration/GenerateApe.js"

import { useMoralis } from "react-moralis";
import useWindowDimensions from "../windowdimension.js";
import ConnectApePng from "../img/mobile_ApeAssistent/ConnectApe.png";
import SuccessApePng from "../img/mobile_ApeAssistent/SuccessApe.png";
import RejoinApePng from "../img/mobile_ApeAssistent/RejoinApe.png";
import ErrorApePng from "../img/mobile_ApeAssistent/ErrorApe.png";
import SpeechBubblePng from "../img/mobile_ApeAssistent/SpeechBubble.png";

const firstLineSpeechBubble = {
    position: "absolute", top: "17%", left: "40%", color: "white"
}
const secondLineSpeechBubble = {
    position: "absolute", top: "20%", left: "42%", color: "white"
}

export function RaffleMobile() {
    console.log("RaffleMobile");

    const [getApeHtml, setApeHtml] = useState(getCurrentActiveApe('connect', ''));//useState(getCurrentActiveApe('connect', ''));
    const [getSpeakBubble, setSpeakBubble] = useState('');
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


    function getCurrentActiveApe(choosenApe, walletAddress, width, height) {
        console.log("choosenape", choosenApe)
        var walletAddressFormatted;
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
        //format wallet address
        if (walletAddress != null && walletAddress != undefined) {
            walletAddressFormatted = JSON.stringify(walletAddress).slice(3, 7) + ".." + JSON.stringify(walletAddress).slice(walletAddress.length - 3, walletAddress.length + 1);
        }


        if (choosenApe == 'connect') {
            return (<>

                <div>
                    <img src={SpeechBubblePng} style={{ width: window.innerWidth, height: 200 }} />
                    <p style={firstLineSpeechBubble}>Please <span style={{ color: "#ff33cc" }}>connect</span> wallet</p>
                    <p style={secondLineSpeechBubble}>first, my Apefriend!</p>
                </div>
                <div>
                    <img src={ConnectApePng} style={{ width: window.innerWidth, height: window.innerWidth }} />
                </div>
            </>);
        }
        else if (choosenApe == 'joinRaffle') {
            return (<>
                <div>
                    <img src={SpeechBubblePng} style={{ width: window.innerWidth, height: 200 }} />
                    <p style={firstLineSpeechBubble}>Welcome <span style={{ color: "#ff33cc" }}>{walletAddressFormatted}</span></p>
                    <p style={secondLineSpeechBubble}>click me to join raffle</p>
                </div>
                <div>
                    <img src={ConnectApePng} style={{ width: window.innerWidth, height: window.innerWidth }} />
                </div>
            </>);
        }
        else if (choosenApe == 'success') {
            return (<>

                <div>
                    <img src={SpeechBubblePng} style={{ width: window.innerWidth, height: 200 }} />
                    <p style={firstLineSpeechBubble}>success</p>
                </div>
                <div>
                    <img src={SuccessApePng} style={{ width: window.innerWidth, height: window.innerWidth }} />
                </div>
            </>);
        }
        else if (choosenApe == 'rejoin') {
            return (<>

                <div>
                    <img src={SpeechBubblePng} style={{ width: window.innerWidth, height: 200 }} />
                    <p style={firstLineSpeechBubble}>rejoin</p>
                </div>
                <div>
                    <img src={RejoinApePng} style={{ width: window.innerWidth, height: window.innerWidth }} />
                </div>
            </>);
        }
        else if (choosenApe == 'error') {
            return (<>

                <div>
                    <img src={SpeechBubblePng} style={{ width: window.innerWidth, height: 200 }} />
                    <p style={firstLineSpeechBubble}>error</p>
                </div>
                <div>
                    <img src={ErrorApePng} style={{ width: window.innerWidth, height: window.innerWidth }} />
                </div>
            </>);
        }

    }

    async function joinRaffle() {
        var runContractResult = await RunContractJoinRaffle(); //toDo need to add contract from useMoralis Headers, maybe get it via property
        setApeHtml(getCurrentActiveApe(runContractResult[0], runContractResult[1])); //create a new ape depending on result, success or error ape (runContractResult[0]) with given success or error information (runContractResult[1])
    }


    return (
        <>
            <HandleMoralisWeb3 />
            <div>
                {getApeHtml}
            </div>
        </>
    )


}