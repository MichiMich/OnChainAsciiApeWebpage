import { Image, Button } from 'antd';
import BananaApe from "./img/BananaColorApe.png";
import Background from "./img/BananaColorApe.png"
import DevilApe from "./img/DevilApe.svg";
import DevilApeNeedToConnect from "./img/DevilApeNeedToConnect.svg";
import windowdimo from "./windowdimension.js"

//for interacting with contract
import { useMoralis, useWeb3Contract } from "react-moralis";
import abi from "../constants/Raffle.json";

const centered = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
}
const backgroundImage = {
    backgroundImage: `url(${BananaApe})`,
    backgroundSize: "contain",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",

}





let showResult = false
function InteractWithContract() {

    const { user, isWeb3Enabled, isWeb3EnableLoading, authenticate, isAuthenticated, isAuthenticating, account, logout } = useMoralis();


    const handleSuccess = async () => {
        //need to do a tx wait
        console.log("success of trx")
        showResult = true;
    }

    const handleComplete = async () => {
        console.group("complete")
    }

    const handleError = async () => {
        console.log("errorvalue")
        console.log(error?.message.search("message"))
        console.log("txresponse")
        console.group("handlafdafae error")
    }



    const { runContractFunction: enterRaffle, data: enterTxResponse, error, isLoading, isFetching } = useWeb3Contract({
        abi: abi,
        contractAddress: "0x75Ab8EeEd318e4294B1AC150C95C852813EBC083",
        functionName: "addAddress",
        params: {
            _addressToBeAdded: account
        },
    }

    );


    const handleResults = () => {
        //here we get the resulte data
        if (error) {
            return (<div>
                {error?.message.substring(error?.message.search('message') + 10, error?.message.search('data') - 3)}
            </div>)
        }
    }

    const InteractContract = async () => {
        await enterRaffle(
            {
                onSuccess: handleSuccess,
                onComplete: handleComplete,
                //onError: () => { handleError(JSON.stringify(error)) },
                onError: handleError
            }
        )
    }

    if (showResult) {
        return (
            <div>You joined</div>
        )
    }
    if (account || isAuthenticated) {
        return (
            <div>
                <Button type="primary" onClick={async () =>
                    InteractContract()
                } disabled={isLoading || isFetching}>Join Raffle</Button>
                {handleResults()}
            </div >)
    }
    return (
        <div></div>
    )



}






function MintPage() {
    const { user, isWeb3Enabled, isWeb3EnableLoading, authenticate, isAuthenticated, isAuthenticating, account, logout } = useMoralis();

    //use of useEffect() in windowdimension.js ->useWindowDimensions which updates the window data
    const { height, width } = windowdimo()

    console.log(account)
    if (account || isAuthenticated) {
        <>
            <Image src={Background} style={{ width: width, opacity: "0.5" }}>
                <Button>Join raffle</Button>
            </Image>
            <div style={{ backgroundImage, width: width, height: height }}>
                <div style={centered}>
                    <a >
                        <img src={DevilApe} />
                    </a>
                </div>
            </div>
        </>
    }

    return (
        <>

            {/* <div style={centered}>

                <div>
                    <Button>Join raffle</Button>
                </div>
                <div>
                    <Image src={BananaApe} />
                </div>
            </div> */}
            <Image src={Background} style={{ width: width, opacity: "0.5" }}>
                <Button>Join raffle</Button>
            </Image>
            <div style={{ backgroundImage, width: width, height: height }}>
                <div style={centered}>
                    <a >
                        <img src={DevilApeNeedToConnect} />
                    </a>
                </div>
            </div>
        </>
    )

}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Component />, rootElement);


export default MintPage;