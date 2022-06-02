import "./css/styleBanner.css";
import { Button, Input } from "web3uikit";
import Background from "./img/backgrounds/stones.jpg"
import Background2 from "./img/backgrounds/asciiForest.png"
import apesGif from "./img/BananaColorApe.png"
import devilApe from "./img/DevilApeTransp.svg"
import "./css/colorBackground.css"
import "./css/grid.css"

import { HandleMoralisWeb3, TriggerMint } from "./InteractWithMintContract.js";

const windowWidth = 1351;

const svgCentered = {
    position: "fixed", top: "15%", left: "30%"
}




export function Home() {



    return (
        <>
            {/* moralis functions */}
            <HandleMoralisWeb3 />
            <div className="topBanner"></div>

            <div className="grad3">

                <div style={svgCentered}>
                    <img src={devilApe} alt="AssistandApe" style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />

                    <div id="wrapperDiv">
                        <div id="div2" style={{ marginLeft: "20%", float: "left", color: "black" }}>
                            <Input
                                id="inputForNrOfWantedNfts"
                                style={{ textcolor: "#ffffff" }}
                                min="1"
                                max="5"
                                label="Nr of wanted apes?"
                                name="inputForNrOfWantedNfts"
                                onBlur={function noRefCheck() { }}
                                onChange={function noRefCheck() { }}
                                type="number"
                                labelBgColor="#ffffff"
                                state="white"
                            />
                            {/* <InputNumber type="number" id="inputForNrOfWantedNfts" name="inputForNrOfWantedNfts" min="1" max="8" defaultValue="1" style={{ width: "100px" }} /> */}
                        </div>
                        <div id="div1" style={{ marginLeft: "2%", float: "left" }}>
                            <Button
                                id="mint_button"
                                onClick={() => TriggerMint(document.getElementById("inputForNrOfWantedNfts").value)}
                                text="Mint"
                                theme="outline"
                                type="button"
                            /></div>
                    </div>
                </div>
            </div>

            {/* <div style={svgCentered}>
                <img src={devilApe} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />

            </div> 
            
             <div className="row">
                <div className="column">
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                </div>
                <div className="column">
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                </div>
                <div className="column">
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                </div>
                <div className="column">
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                </div>
                <div className="column">
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                </div>
                <div className="column">
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                </div>
                <div className="column">
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                    <img src={devilApe} style={{ height: "250px" }} />
                </div>
            </div>
            
            
            */}
        </>);
}





