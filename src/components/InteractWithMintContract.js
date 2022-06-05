
import { useWeb3Contract, useMoralisQuery } from "react-moralis";
import { abi } from "../constants/OnChainAsciiApes.json";
var globalMint;

export async function TriggerMint(nrOfWantedNfts) {

    if (parseInt(nrOfWantedNfts) > process.env.REACT_APP_MAX_ALLOWED_NR_NFTS_PER_MINT) {
        alert("only " + process.env.REACT_APP_MAX_ALLOWED_NR_NFTS_PER_MINT + " nfts per mint are allowed");
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
        onSuccess: (tx) => tx.wait(1).then(handleSuccess(tx)),
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
    alert(createdErrorMessage);
    return [wantedAssistentApe, createdErrorMessage];

}

const handleSuccess = async (tx) => {
    await tx.wait(1);
    console.log("success entered")
    return ['success', tx];
}

export function HandleMoralisWeb3() {

    const { runContractFunction: mint } = useWeb3Contract({
        abi: abi,
        contractAddress: "0xDEAD5D3D47FbcFD09324f62e2D2C875EdF0c8BC7",
        functionName: "mint"
    }
    );

    globalMint = mint;

    return;
}
