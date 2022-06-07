
import { useWeb3Contract } from "react-moralis";
import { abi } from "../constants/OnChainAsciiApes.json";
import { throwNotification } from "./notification.js";
var globalMint;

export async function TriggerMint(nrOfWantedNfts) {
    console.log("number from input: ", nrOfWantedNfts)
    if (parseInt(nrOfWantedNfts) > process.env.REACT_APP_MAX_ALLOWED_NR_NFTS_PER_MINT) {
        //alert("only " + process.env.REACT_APP_MAX_ALLOWED_NR_NFTS_PER_MINT + " nfts per mint are allowed");
        const message = "only " + process.env.REACT_APP_MAX_ALLOWED_NR_NFTS_PER_MINT + " nfts per mint are allowed";
        throwNotification('info', message, "Invalid number");
        return;
    }
    else if (parseInt(nrOfWantedNfts) <= 0 || nrOfWantedNfts === undefined || nrOfWantedNfts === "" || nrOfWantedNfts === null) {
        throwNotification('info', "Please choose a nr between 1-2", "Invalid number");
        return;
    }


    let options = {
        abi: abi,
        contractAddress: process.env.REACT_APP_NFT_CONTRACT_ADDRESS,
        functionName: "mint",
        params: {
            _wantedQuantity: nrOfWantedNfts
        },
        msgValue: nrOfWantedNfts * process.env.REACT_APP_MINT_PRICE_PER_NFT_IN_GWEI
    }


    await globalMint({
        params: options,
        onSuccess: (tx) => (handleSuccess(tx)),
        onError: (tx) => (handleError(tx)),
    });

}




const handleError = async (tx) => {
    var createdErrorMessage;
    var wantedAssistentApe = 'error';
    console.log("tx from interaction", tx);
    if (tx.error !== undefined) {
        createdErrorMessage = tx.error.message;
        console.log("filtered error message", createdErrorMessage);
        wantedAssistentApe = 'rejoin';
    }
    else if (tx.message !== undefined) {
        //tx not fired, could be user cancel transaction
        createdErrorMessage = tx.message;
        console.log("tx message", tx.createdErrorMessage);
    }
    else {
        createdErrorMessage = "undefined error occured";
    }
    throwNotification('error', createdErrorMessage, "Error");
    return [wantedAssistentApe, createdErrorMessage];

}

const handleSuccess = async (tx) => {
    await tx.wait(1);
    console.log("success entered")
    console.log("tx", tx);
    throwNotification('success', "Congrats my onchain friend, you have successfully minted!\nThanks, you are awesome!\nDid you know: all money from the mint goes to **SaveTheChildren**", "Success");
    //alert("Congrats my onchain friend, you have successfully minted!\nThanks, you are awesome!\nDid you know: all money from the mint goes to **SaveTheChildren**");
    return ['success', tx];
}

export function HandleMoralisWeb3() {

    const { runContractFunction: mint } = useWeb3Contract({
        abi: abi,
        contractAddress: process.env.REACT_APP_NFT_CONTRACT_ADDRESS,
        functionName: "mint"
    }
    );

    globalMint = mint;

    return;
}
