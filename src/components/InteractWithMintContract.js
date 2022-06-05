
import { useWeb3Contract, useMoralisQuery } from "react-moralis";
import { abi } from "../constants/OnChainAsciiApes.json";
var globalMint;
var globalFetch;
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

export async function TryGettingTop3Donators() {

    const basicQuery = await globalFetch({
        onError: () => (alert("error fetching data")),
        onSuccess: () => (console.log("success"))


    })
    console.log("basicQuery", basicQuery);
    const top3DonatorsFormatted = getTop3DonatorsFormatted(basicQuery);

    console.log("donators formatted", top3DonatorsFormatted);
    console.log("first address", top3DonatorsFormatted[0].address);
    return (TryGettingTop3Donators);

}

function getTop3DonatorsFormatted(queryResult) {
    // console.log("top3donators: ", queryResult[0]);
    // console.log("top3donators: ", queryResult[0].id);
    const newTop3Donators = queryResult[0].get("newTop3Donators");
    // console.log("newTop3Donators: ", newTop3Donators);
    // console.log("first: ", newTop3Donators[0]);
    let Donators = [];
    for (let i = 0; i < newTop3Donators.length; i++) {
        Donators.push({ address: newTop3Donators[i][0], amount: newTop3Donators[i][1] * 1e-18 });
    }


    return (Donators);

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

    const { fetch, onError } = useMoralisQuery(
        "DonatorsUpdate",
        (query) => query.limit(10)
    );

    //useMoralisQuery("DonatorsUpdate");

    globalFetch = fetch;

    const { runContractFunction: mint } = useWeb3Contract({
        abi: abi,
        contractAddress: "0xDEAD5D3D47FbcFD09324f62e2D2C875EdF0c8BC7",
        functionName: "mint"
    }
    );

    globalMint = mint;

    return;
}

/* example from https://moralis.io/how-to-interact-with-smart-contracts-through-your-website/
async function donate() {
    let options = {
      contractAddress: "0x356d2E7a0d592bAd95E86d19479c37cfdBb68Ab9",
      functionName: "newDonation",
      abi: [
        {
          inputs: [
            { internalType: "string", name: "note", type: "string" },
          ],
          name: "newDonation",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
      Params: {
        Note: "Thanks for your work",
      },
      msgValue: Moralis.Units.ETH(0.1),
    };
    await Moralis.User.logOut();
    console.log("logged out");
  }
  */