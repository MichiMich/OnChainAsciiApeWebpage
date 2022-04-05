import { useMoralis, useWeb3Contract } from "react-moralis";


const { runContractFunction: enterRaffle, data: enterTxResponse, error, isLoading, isFetching } = useWeb3Contract({
    abi: abi,
    contractAddress: "0x75Ab8EeEd318e4294B1AC150C95C852813EBC083",
    functionName: "addAddress",
    params: {
        _addressToBeAdded: account
    },

}
);

class InteractContract extends React.Component {
    constructor(props) {
        super(props);
    }



    joinRaffle = async () => {
        const tx = await enterRaffle(
            {
                onSuccess: (tx) => tx.wait(1).then(handleSuccess(tx)),
                //onComplete: (tx) => tx.wait(1).then(handleComplete(tx)),
                //             //onError: () => { handleError(JSON.stringify(error)) },
                onError: (tx) => handleError(tx, error),
            }
        )

    }

}