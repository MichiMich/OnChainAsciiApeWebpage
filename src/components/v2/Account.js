import { useMoralis } from "react-moralis";
import { ConnectButton, Button } from "web3uikit";

function Account() {
    const { account, logout } = useMoralis();

    function handleAccountChange() {
        if (account) {
            return (
                <div>
                    <div ><Button theme="outline" text="Logout" onClick={() => logout()} /></div>
                </div>
            )
        }
        else {
            return (
                <div >
                    <div><ConnectButton moralisAuth="true" signingMessage="please sign to verify wallet" /></div>
                </div>
            )
        }
    }


    return (
        <>
            {handleAccountChange()}
        </>
    )

}
export default Account;