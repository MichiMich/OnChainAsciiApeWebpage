import "./css/styleBanner.css";
import { Button, Input } from "web3uikit";
import Background from "./img/backgrounds/stones.jpg"
import Background2 from "./img/backgrounds/asciiForest.png"
import apesGif from "./img/BananaColorApe.png"
import devilApe from "./img/transparent/DevilApe.png"

import { AnimatedBackground } from "./animatedBackground.js";
import "./css/colorBackground.css"
import "./css/grid.css"
import "./css/animatedBackground.css"
import { HandleMoralisWeb3, TriggerMint } from "./InteractWithMintContract.js";
import { ShowTop3Donators } from "./top3Donators.js";
import { projectInformations } from "./projectInformation.js";
import { HandleDonation } from "./donate.js";

//todo: define correct nft cost at .env file -> 0.005 eth
export function Home() {

    return (
        <>
            {/* moralis functions */}
            <HandleMoralisWeb3 />
            <div className="container" style={{ display: "block", width: "100vw" }}>


                <AnimatedBackground />
                <div style={{ height: "65vh" }}>
                    <div style={{ margin: "auto", width: "50%", opacity: "1" }}>
                        <img src={devilApe} alt="AssistandApe" style={{ height: "50vw", maxWidth: "500px", maxHeight: "500px" }} />

                    </div>

                    <div style={{ margin: "auto", width: "50%" }}>
                        <div style={{ marginBottom: "2%" }}>
                            <div style={{ float: "left", marginRight: "2%", width: "200px" }}>
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


                                {/* <input className={input123} type="number" id="inputForNrOfWantedNfts" min="1" max="8" defaultValue="1" /> */}
                            </div>
                            <div>
                                <Button
                                    id="mint_button"
                                    onClick={() => TriggerMint(document.getElementById("inputForNrOfWantedNfts").value)}
                                    text="Mint (0.005 eth)"
                                    theme="outline"
                                    type="button"
                                />
                            </div>
                            {/* <div>
                                    <Button
                                        id="try fetch"
                                        onClick={() => GetTop3Donators()}
                                        text="fetch data"
                                        theme="outline"
                                        type="button"
                                    />
                                </div> */}

                        </div>


                    </div>
                </div>
                <ShowTop3Donators />
                <HandleDonation />
                {projectInformations()}


                {/* <div style={{ marginLeft: "2%", marginRight: "2%", marginTop: "5%", color: "#ffffff", borderStyle: "solid", borderRadius: "25px", borderWidth: "2px", borderColor: "white" }}>
                        <h1 style={{ textAlign: "center", color: "#ffffff" }}>ApeDetails</h1>
                        <div style={{ float: "left", marginRight: "0%", width: "20%", borderStyle: "solid", borderWidth: "1px", borderColor: "white" }}>
                            <img src={apeEyes} style={{ width: "200px" }} />
                        </div>
                        <div style={{ float: "left", marginLeft: "1px", width: "78%", borderStyle: "solid", borderWidth: "2px", borderColor: "white" }}>
                            <p>hallo</p>
                        </div>

                    </div> */}


                <div>

                </div>




            </div>

            <div className="grad3"></div>


        </>);


}





