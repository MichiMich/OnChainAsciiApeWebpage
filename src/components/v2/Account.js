import { useMoralis } from "react-moralis";
import { ConnectButton, Button } from "web3uikit";
import "../css/styleBanner.css";

function Account() {
    const { account, logout } = useMoralis();

    function handleAccountChange() {
        if (account) {
            return (
                <>
                    <div className="topBanner">
                        <div className="lrContainersRight"><Button theme="outline" text="Logout" onClick={logout} /></div>
                    </div>
                </>

            )
        }
        else {
            return (
                <>
                    <div className="topBanner">
                        <div className="lrContainersRight"><   ConnectButton moralisAuth="false" signingMessage="please sign to verify wallet" /></div>
                    </div>
                </>
            )
        }
    }


    return (
        <>
            <div className="site-page-header-ghost-wrapper"></div>
            <div>
                {handleAccountChange()}
            </div>

        </>
    )

}
export default Account;