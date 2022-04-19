import { useEffect, useState } from "react";
import { HandleMoralisWeb3, RunContractJoinRaffle } from "../InteractWithContract.js";
import { GetCurrentActiveApe_mobile } from "./getActiveApe_mobile.js";
import { useMoralis } from "react-moralis";
import useWindowDimensions from "../windowdimension.js";


export function RaffleMobile() {
    console.log("RaffleMobile");

    const [getApeHtml, setApeHtml] = useState(GetCurrentActiveApe_mobile('connect', ''));//useState(GetCurrentActiveApe_mobile('connect', ''));
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
            setApeHtml(GetCurrentActiveApe_mobile('joinRaffle', '', JSON.stringify(account)));
        }
        else {
            console.log("useEffect mint account, else")
            console.log("trigger ape useEffect !account")
            setApeHtml(GetCurrentActiveApe_mobile('connect', '', width, height));
        }
    }, [account]); //only re-run if getApeHtml has changed

    async function joinRaffle() {
        var runContractResult = await RunContractJoinRaffle(); //toDo need to add contract from useMoralis Headers, maybe get it via property
        setApeHtml(GetCurrentActiveApe_mobile(runContractResult[0], runContractResult[1])); //create a new ape depending on result, success or error ape (runContractResult[0]) with given success or error information (runContractResult[1])
    }

    if (account) {
        //needed to add this if because of the joinRaffle() function inside here and the content change of setApeHtl in the joinRaffle function, exporting it to apeMobile did not work
        return (
            <>
                <HandleMoralisWeb3 />
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
                <div>
                    {getApeHtml}
                </div>
            </>
        )
    }



}