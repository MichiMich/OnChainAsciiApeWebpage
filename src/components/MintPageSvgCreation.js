import { Image, Button } from 'antd';
import BananaApe from "./img/BananaColorApe.png";
import Background from "./img/backgrounds/sun.png"
//import Background from "./img/backgrounds/mariocut2.jpg";
import JoinRaffleApe from "./img/SpeekingApes/TwoPartApeJoinRaffle.svg";
import ConnectApe from "./img/SpeekingApes/TwoPartApeConnect.svg";
import windowdimo from "./windowdimension.js"
import { useState } from "react";
import svgStart from "./img/SpeekingApes/templates/Start.svg"
import svgEnd from "./img/SpeekingApes/templates/End.svg"

import copiedApe from "./img/svg_test/createdsvg.svg"

//for interacting with contract
import { useMoralis, useWeb3Contract } from "react-moralis";
import abi from "../constants/Raffle.json";
import { useEffect } from 'react';
import { ConsoleSqlOutlined } from '@ant-design/icons';
import { async } from 'q';
import { render } from '@testing-library/react';
import { string } from 'yargs';

const centered = {
    position: "fixed",
    top: "55%",
    left: "20%",
    transform: "translate(-50%, -50%)",
}
const backgroundImage = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "contain",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    opacity: "1"

}


const svgNewLineStart = '<tspan x="4%" dy="1.2em"';
const svgNewLineEnd = '</tspan>'

function createLineSvg(TextInput, ColorInput) {
    var createdLine = null;
    console.log("textInput", typeof (TextInput));
    console.log("colorInput", typeof (ColorInput));
    //var check does not work, always resultet in zero input
    if (TextInput == "" || TextInput == null || ColorInput == "" || ColorInput == null) {
        console.log("zero input")
        return;
    }
    //ToDo: compare data input if both are string, did not work for now, always returned true here
    // if ((typeof (TextInput) != string)) {
    //     console.log("wrong input data");
    //     return;
    // }
    var start = '<text y="12%" x="50%" fill="';
    var middle = '" text-anchor="start" font-size="18" xml:space="preserve" font-family="monospace">';
    var end = '</text>';
    createdLine = start + ColorInput + middle + TextInput + end;
    console.log("createdSvgLine", createdLine);
    return (createdLine);

}


let showResult = false
function InteractWithContract() {

    const { isAuthenticated, account } = useMoralis();


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

function CreateSVG() {

    const [data, setData] = useState(null);
    const [data3, setData3] = useState(null);

    var createdSvg = null;

    useEffect(() => {
        createdSvg = null;
    });

    fetch(svgStart)
        .then(r => r.text())
        .then(data => {
            // console.log('data', data);
            setData(data);
        });

    fetch(svgEnd)
        .then(r => r.text())
        .then(data3 => {
            console.log('data3', data3);
            setData3(data3);
        });


    if (data != null && data3 != null) {
        // createdSvg = data.concat(data2).concat(data3);
        //createdSvg = data + bubbleTextLine1 + bubbleTextLine2
        createdSvg = data + createLineSvg('hello friend', 'blue');
        createdSvg += data3;
        console.log("createdSvg", createdSvg);
        return (createdSvg)
    }


}


function MintPage() {
    const { user, isWeb3Enabled, isWeb3EnableLoading, authenticate, isAuthenticated, isAuthenticating, account, logout } = useMoralis();

    //use of useEffect() in windowdimension.js ->useWindowDimensions which updates the window data
    const { height, width } = windowdimo()

    const [count, setCount] = useState(0);



    let ActiveApe = ConnectApe;
    let dyncreatedApe = CreateSVG();

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        ActiveApe = ConnectApe;
    });

    if (!account || isAuthenticated) {
        ActiveApe = ConnectApe;
    }
    else {
        ActiveApe = JoinRaffleApe;
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
            <div style={{ width: width, height: height }}>
                <img src={Background} style={{ width: width, height: height, opacity: "1" }}>
                </img>

                <div style={centered}>
                    <a >
                        <img src={ActiveApe} style={{ width: width / 2.5, height: width / 2.5, opacity: "1" }} />
                    </a>
                </div>

                <div>
                    <img src={`data:image/svg+xml;utf8,${dyncreatedApe}`} />
                </div>
            </div>


        </>
    )

}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Component />, rootElement);


export default MintPage;