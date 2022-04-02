import { Image, Button } from 'antd';
import BananaApe from "./img/BananaColorApe.png";
import Background from "./img/backgrounds/sun.png"
//import Background from "./img/backgrounds/mariocut2.jpg";
import JoinRaffleApe from "./img/SpeekingApes/TwoPartApeJoinRaffle.svg";
import ConnectApe from "./img/SpeekingApes/TwoPartApeConnect.svg";
import windowdimo from "./windowdimension.js"
import { useState } from "react";
import InteractWithContract from './InteractWithContract.js';

//svg dyn creation
import { CreateConnectApe, CreateJoinRaffleApe } from "./ApeGeneration/ConnectApe.js"

import copiedApe from "./img/svg_test/createdsvg.svg"

//for interacting with contract
import { useMoralis, useWeb3Contract } from "react-moralis";
import abi from "../constants/Raffle.json";
import { useEffect } from 'react';
import { ConsoleSqlOutlined } from '@ant-design/icons';
import { async } from 'q';
import { render } from '@testing-library/react';
import { string } from 'yargs';

document.title = "AsciiApes";

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


function MintPage() {
    const { user, isWeb3Enabled, isWeb3EnableLoading, authenticate, isAuthenticated, isAuthenticating, account, logout } = useMoralis();

    //use of useEffect() in windowdimension.js ->useWindowDimensions which updates the window data
    const { height, width } = windowdimo()

    const [count, setCount] = useState(0);

    let ActiveApe = ConnectApe;

    let dyncreatedApe = null;

    useEffect(() => {
        ActiveApe = ConnectApe;
        dyncreatedApe = null;
    });

    if (!account || isAuthenticated) {
        dyncreatedApe = CreateConnectApe();
        ActiveApe = ConnectApe;
    }
    else {
        ActiveApe = JoinRaffleApe;
        dyncreatedApe = CreateJoinRaffleApe(JSON.stringify(account));
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

                {/* <div style={centered}>
                    <a >
                        <img src={ActiveApe} style={{ width: width / 2.5, height: width / 2.5, opacity: "1" }} />
                    </a>
                </div> */}

                <div style={centered}>
                    <a onClick={InteractWithContract()}>
                        <img src={`data:image/svg+xml;utf8,${dyncreatedApe}`} style={{ width: width / 2.5, height: width / 2.5, opacity: "1" }} />
                    </a>
                    <InteractWithContract />
                </div>
            </div>



        </>
    )

}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Component />, rootElement);


export default MintPage;