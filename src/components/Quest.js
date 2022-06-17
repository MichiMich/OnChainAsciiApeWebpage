import { useMoralisWeb3Api, useMoralis } from "react-moralis";
import { throwNotification } from "./notification.js";
import { useState } from "react";
require('dotenv').config()


export function Quest() {
    const Web3Api = useMoralisWeb3Api();
    const { account } = useMoralis();
    const [getAllowedForEarlyinformation, setAllowedForEarlyinformation] = useState(false);

    async function fetchNFTsForContract() {
        if (!account) {
            alert("please connect wallet first");
            return;
        }
        const options = {
            chain: "eth",
            address: account.address,//"0x84B1C25C65eb2b3B3023B921116bCef58E5c9592",
            token_address: "0xAf6344bC7bC538DCf7179C36fc57cCaE302c1bbb",
        };
        try {
            const result = await Web3Api.account.getNFTsForContract(options);
            console.log(result);
            console.log("number of nfts found: ", result.total)
            if (result.total > 0) {
                //ape found
                const message = "Welcome my ape friend!Here is your early access information!";
                throwNotification('success', message);
                setAllowedForEarlyinformation(true);
            }
            else {
                throwNotification('info', "Sorry no ape in your wallet found. Early access is only possible with an ape!\nMint one at https://onchainasciiapes.com")
            }
        } catch (e) {
            console.log(e);
            throwNotification('error', e);
        }
    };


    if (account) {
        return (<>
            <p style={{ color: "black" }}>Hello my friend, push the button to check if you are allowed for early informations</p>
            <button onClick={() => fetchNFTsForContract()}>CheckNFTs</button>
            {getAllowedForEarlyinformation &&
                <>
                    <h1>
                        You are worthy! Here is the first piece of the puzzle:
                    </h1>
                    <h2>
                        tell me how much apes are left and can be minted from anybody
                    </h2>
                    <h2>
                        send the answer to the OCAA_QuestBot with the command '!left apes 1234' where 1234 is your answer
                    </h2>
                </>

            }
        </>)
    }
    else {
        if (getAllowedForEarlyinformation) {
            setAllowedForEarlyinformation(false);
        }
        return (<>
            <p style={{ color: "black" }}>Please connect wallet first</p>
        </>)
    }



}