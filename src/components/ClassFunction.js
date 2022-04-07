import { useState } from "react";
import { useMoralis } from "react-moralis";
import { CreateConnectApe, CreateJoinRaffleApe, CreateErrorApe, CreateSuccessApe } from "./ApeGeneration/GenerateApe.js"
import { HandleMoralisWeb3, RunContractJoinRaffle, GetcontractFunction } from "./InteractWithContract.js";
import Background from "./img/backgrounds/sun.png"
//styles start
const centered = {
    position: "fixed",
    top: "55%",
    left: "20%",
    transform: "translate(-50%, -50%)",
}
//styles end

export function HandleAll() {

    const [nrOfClicks, setNrOfClicks] = useState(0);

    const { account } = useMoralis();

    const [wantedApe, setWantedApe] = useState(getCurrentActiveApe('connect', ''));


    async function Clickidi() {
        console.log("clickidi entered")
        console.log("moralis hook made")
        var runContractResult = await RunContractJoinRaffle(); //toDo need to add contract from useMoralis Headers, maybe get it via property

        console.log("return wantedApe, givenApeData");
        console.log("result0", runContractResult[0], "result1", runContractResult[1])
        //txResultApe = runContractResult[0];
        //txResultMessage = runContractResult[1];
        console.log("right before handle access")
        //getCurrentActiveApe(wantedApe, givenApeData);
        console.log("error set")
        // handleClick(true, runContractResult[1]);
        setWantedApe(getCurrentActiveApe('error', runContractResult[1])) //activating new ape and rerender content with this activated ape
    }


    function getCurrentActiveApe(choosenApe, apeData) {
        console.log("choosenape", choosenApe)
        const windowWidth = window.innerWidth;


        if (choosenApe == 'connect') {
            return (<>
                {console.log("serviceApeConnect wanted")}
                <div style={centered}>
                    <img src={`data:image/svg+xml;utf8,${CreateConnectApe()}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
                </div>
            </>);
        }
        else if (choosenApe == 'joinRaffle') {
            return (<>
                {console.log("serviceApejoinRaffle wanted")}
                <a onClick={() => Clickidi()}>
                    <div style={centered}>
                        <img src={`data:image/svg+xml;utf8,${CreateJoinRaffleApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
                    </div>
                </a>
            </>);
        }
        else if (choosenApe == 'success') {
            return (<>
                {console.log("serviceApe success wanted")}
                <div style={centered}>
                    <img src={`data:image/svg+xml;utf8,${CreateSuccessApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
                </div>
            </>);
        }
        else if (choosenApe == 'error') {
            return (<>
                {console.log("serviceApe error wanted")}
                <div style={centered}>
                    <img src={`data:image/svg+xml;utf8,${CreateErrorApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
                </div>
            </>)
        }

    }

    function handleClick(errorwanted, errordata) {
        setNrOfClicks(nrOfClicks + 1)
        if (errorwanted) {
            setWantedApe(getCurrentActiveApe('error', errordata));
        }
        else if (account) {
            setWantedApe(getCurrentActiveApe('joinRaffle', 'raffleData'))
        }
        else {
            setWantedApe(getCurrentActiveApe('connect', 'connectData'))
        }

        console.log('clicked', nrOfClicks);
    }




    return (
        <>
            <HandleMoralisWeb3 />
            <img src={Background} style={{ width: window.innerWidth, height: window.innerHeight, opacity: "1" }}>
            </img>
            <div>
                <button onClick={() => handleClick()}>click me {nrOfClicks}</button>

            </div>
            <div>
                {wantedApe}
            </div>
        </>
    )
}