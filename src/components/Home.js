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
import { HandleMoralisWeb3, TriggerMint, TryGettingTop3Donators } from "./InteractWithMintContract.js";
import { projectInformations } from "./projectInformation.js";


import { GetTop3Donators } from "./top3Donators.js"

export function Home() {

    return (
        <>
            {/* moralis functions */}
            <HandleMoralisWeb3 />

            <div className="container" style={{ display: "block", width: "100vw" }}>

                <div className="grad3">
                    <AnimatedBackground />
                    <div >
                        <div style={{ position: "relative", left: "20%" }}>
                            <img src={devilApe} alt="AssistandApe" style={{ height: "50vw" }} />
                        </div>

                        <div style={{ position: "relative", left: "20%" }}>
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
                                <div>
                                    <Button
                                        id="try fetch"
                                        onClick={() => TryGettingTop3Donators()}
                                        text="fetch data"
                                        theme="outline"
                                        type="button"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                    {projectInformations()}
                    <div style={{ marginLeft: "2%", marginRight: "2%", marginTop: "25%", color: "#ffffff", borderStyle: "solid", borderRadius: "25px", borderWidth: "2px", borderColor: "white" }}>
                        <h1 style={{ textAlign: "center", color: "#ffffff" }}>What are OnChainAsciiApes</h1>
                        <p style={{ marginLeft: "2%", textAlign: "center" }}>OnChainAsciiApes are a nft creation of 205 Apes completly built with Ascii-Characters only. They are fully onchain generated and randomly assigned during mint. There is no need of a decentral/central storage, because its all onchain and you can query your created nft anytime without any cost or any other service</p>
                    </div>
                    <div style={{ marginLeft: "2%", marginRight: "2%", marginTop: "5%", color: "#ffffff", borderStyle: "solid", borderRadius: "25px", borderWidth: "2px", borderColor: "white" }}>
                        <h1 style={{ textAlign: "center", color: "#ffffff" }}>Why OnChainAsciiApes</h1>
                        <p style={{ marginLeft: "2%", textAlign: "center" }}>The OnChainAsciiApes serve as the genesis mint of my brand MichiMich. They will provide future benefits like access to <b>quest informations, genesis-holders only areas with early information access, wl access for future mints</b> and the possibility to give most welcome input to current development projects. The genesis mint should be a nearly free mint and for all who believe in the project, the future or/and just the onchain art and the fun I had developing this.</p>
                    </div>

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





