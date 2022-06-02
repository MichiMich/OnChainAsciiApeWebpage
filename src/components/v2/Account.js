import { useMoralis } from "react-moralis";
import { ConnectButton, Button } from "web3uikit";

function Account() {
    const { account, logout } = useMoralis();

    function handleAccountChange() {
        if (account) {
            return (
                <div className="lrContainersRight"><Button theme="outline" text="Logout" onClick={() => logout()} /></div>


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
            <div></div>
            <div>
                {handleAccountChange()}
            </div>

        </>
    )

}
export default Account;