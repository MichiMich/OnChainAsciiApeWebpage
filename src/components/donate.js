
import { useWeb3Contract } from "react-moralis";
import { Button, Input } from "web3uikit";
import { abi } from "../constants/Top3Donators.json";
var globalDonate;

async function Donate(donationValueInEth) {
    const donationValueInGwei = donationValueInEth * 1e18
    console.log("donation value eth: ", donationValueInEth);
    if (parseFloat(donationValueInGwei) < 0.001) {
        alert("min donation amount of 0.001 eth required");
        return;
    }


    let options = {
        abi: abi,
        contractAddress: "0xCE9ea0C43c99162e337B2E2aec90C5Db73e053D8",
        functionName: "donate",
        msgValue: donationValueInGwei
    }


    await globalDonate({
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
    alert(createdErrorMessage);
    return [wantedAssistentApe, createdErrorMessage];

}

const handleSuccess = async (tx) => {
    await tx.wait(1);
    console.log("success entered")
    console.log("tx", tx);
    alert("Thank you my onchain friend!\n100% of your donation goes to **SaveTheChildren**!\nThe top3 donators get an special ape!\nbtw: you can donate multiple times,the donations will be summed up!");
    return ['success', tx];
}

export function HandleDonation() {

    const { runContractFunction: donate } = useWeb3Contract({
        abi: abi,
        contractAddress: "0xCE9ea0C43c99162e337B2E2aec90C5Db73e053D8",
        functionName: "donate"
    }
    );

    globalDonate = donate;

    return (
        <>
            <div style={{ margin: "auto", width: "50%", marginTop: "2%" }}>
                <div style={{ marginBottom: "2%" }}>
                    <div style={{ float: "left", marginRight: "2%", width: "200px" }}>
                        <Input
                            id="donationValue"
                            style={{ textcolor: "#ffffff" }}
                            min="0.001"
                            max="10000"
                            label="Wanted donation[eth]"
                            name="inputForNrOfWantedNfts"
                            onBlur={function noRefCheck() { }}
                            onChange={function noRefCheck() { }}
                            type="number"
                            labelBgColor="#ffffff"
                            state="white"
                        />


                        {/* <input className={input123} type="number" id="inputForNrOfWantedNfts" min="1" max="8" defaultValue="1" /> */}
                    </div>
                    <div>
                        <Button
                            id="mint_button"
                            onClick={() => Donate(document.getElementById("donationValue").value)}
                            text="Donate"
                            theme="outline"
                            type="button"
                        />
                    </div>
                    {/* <div>
                                    <Button
                                        id="try fetch"
                                        onClick={() => GetTop3Donators()}
                                        text="fetch data"
                                        theme="outline"
                                        type="button"
                                    />
                                </div> */}

                </div>
            </div>

        </>

    )
}
