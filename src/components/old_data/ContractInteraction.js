import { useMoralis, useWeb3Contract } from "react-moralis";
import { abi } from "../constants/Raffle.json";

export function JoinRaffle() {

    const { account } = useMoralis();

    const { runContractFunction: enterRaffle, data: enterTxResponse, error, isLoading, isFetching } = useWeb3Contract({
        abi: abi,
        contractAddress: "0x75Ab8EeEd318e4294B1AC150C95C852813EBC083",
        functionName: "addAddress",
        params: {
            _addressToBeAdded: account
        },

    }
    );

    if (!account) {
        console.log("not connected")
        return;
    }

    const InteractContract = async () => {
        const tx = await enterRaffle(
            {
                onSuccess: (tx) => tx.wait(1).then(console.log("success")),
                //onComplete: (tx) => tx.wait(1).then(handleComplete(tx)),
                //             //onError: () => { handleError(JSON.stringify(error)) },
                onError: (tx) => console.log("error"),
            }
        )

    }

}