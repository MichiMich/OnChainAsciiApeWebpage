
import { useMoralis, useWeb3Contract } from "react-moralis";
import { abi } from "../constants/OnChainAsciiApes.json";
var globalMint;


export async function runContractMint() {
    console.log("runContractMint entered")
    await globalMint({
        onSuccess: (tx) => tx.wait(1).then(handleSuccess(tx)),
        onError: (tx) => (handleError(tx)),
    })
}

const handleError = async (tx) => {
    var createdErrorMessage;
    var wantedAssistentApe = 'error';
    console.log("tx from interaction", tx);
    if (tx.error != undefined) {
        createdErrorMessage = tx.error.message;
        console.log("filtered error message", createdErrorMessage);
        wantedAssistentApe = 'rejoin';
    }
    else if (tx.message != undefined) {
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
    // setApeAssistent = 'success';
}

export function HandleMoralisWeb3() {

    const { user, isWeb3Enabled, isWeb3EnableLoading, isAuthenticating, account, logout, Units } = useMoralis();


    const { runContractFunction: mint, data: enterTxResponse, error, isLoading, isFetching } = useWeb3Contract({
        abi: abi,
        contractAddress: "0xDEAD5D3D47FbcFD09324f62e2D2C875EdF0c8BC7",
        functionName: "mint",
        params: {
            _wantedQuantity: 1 //todo: adapt quantity with value coming from website, check if less than 8 in first place
        },
        msgValue: 1000000000000000,

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