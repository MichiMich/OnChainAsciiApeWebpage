import { useMoralis } from "react-moralis";
import { ConnectButton, Button } from "web3uikit";

function Account() {
    const { account, logout } = useMoralis();

    function handleAccountChange() {
        if (account) {
            return (
                <div >
                    <div className="lrContainersRight"><Button theme="outline" text="Logout" onClick={() => logout()} /></div>
                </div>

            )
        }
        else {
            return (
                <div >
                    <div className="lrContainersRight"><ConnectButton moralisAuth="true" signingMessage="please sign to verify wallet" /></div>
                </div>
            )
        }
    }


    return (
        <>
            <div>
                {handleAccountChange()}
            </div>

        </>
    )

}
export default Account;