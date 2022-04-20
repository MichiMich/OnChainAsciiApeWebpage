import { useEffect, useState } from "react";
import { HandleMoralisWeb3, RunContractJoinRaffle } from "../InteractWithContract.js";
import Background from "../img/backgrounds/sun.png"
import { useMoralis } from "react-moralis";
import useWindowDimensions from "../windowdimension.js";
import { GetCurrentActiveApe_desktop } from "./getActiveApe_desktop.js";

export function RaffleDesktop() {

    const [getApeHtml, setApeHtml] = useState(GetCurrentActiveApe_desktop('connect', ''));//useState(GetCurrentActiveApe_desktop('connect', ''));
    const { account } = useMoralis();
    const { height, width } = useWindowDimensions(); //otional, adapting the window positon and the ape, renders a lot, updates the window width on every change

    useEffect(() => {
        if (account) {
            setApeHtml(GetCurrentActiveApe_desktop('joinRaffle', JSON.stringify(account)));
        }
        else {
            setApeHtml(GetCurrentActiveApe_desktop('connect', '', width, height));
        }
    }, [account]); //only re-run if getApeHtml has changed

    async function joinRaffle() {
        var runContractResult = await RunContractJoinRaffle(); //toDo need to add contract from useMoralis Headers, maybe get it via property
        setApeHtml(GetCurrentActiveApe_desktop(runContractResult[0], runContractResult[1])); //create a new ape depending on result, success or error ape (runContractResult[0]) with given success or error information (runContractResult[1])
    }


    if (account) {
        //needed to add this if because of the joinRaffle() function inside here and the content change of setApeHtl in the joinRaffle function, exporting it to apeMobile did not work
        return (
            <>
                <HandleMoralisWeb3 />
                <img src={Background} style={{ width: window.innerWidth, height: window.innerHeight, opacity: "1" }}>
                </img>
                <a onClick={() => joinRaffle()}>
                    <div>
                        {getApeHtml}
                    </div>
                </a>
            </>
        )
    }
    else {
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
    //<div style={{ backgroundColor: "black", width: width, height: height }}> pure background color, no img

}