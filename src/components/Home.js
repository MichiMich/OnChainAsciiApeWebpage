import "./css/styleBanner.css";
import { Button, Input, Table, Tag } from "web3uikit";
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



            <AnimatedBackground />
            {mintInput()}
            <ShowTop3Donators />
            {/* 
            {mintInput()}
            <ShowTop3Donators />
            <HandleDonation />
            {projectInformations()} */}


            {/* <div style={{ marginLeft: "2%", marginRight: "2%", marginTop: "5%", color: "#ffffff", borderStyle: "solid", borderRadius: "25px", borderWidth: "2px", borderColor: "white" }}>
                        <h1 style={{ textAlign: "center", color: "#ffffff" }}>ApeDetails</h1>
                        <div style={{ float: "left", marginRight: "0%", width: "20%", borderStyle: "solid", borderWidth: "1px", borderColor: "white" }}>
                            <img src={apeEyes} style={{ width: "200px" }} />
                        </div>
                        <div style={{ float: "left", marginLeft: "1px", width: "78%", borderStyle: "solid", borderWidth: "2px", borderColor: "white" }}>
                            <p>hallo</p>
                        </div>

                    </div> */}
            <div className="grad3"></div>


        </>);


}


function mintInput() {
    return (
        <>
            {/* <div style={{ width: "120vw" }}>
                    <div style={{ margin: "auto", width: "50%", opacity: "1" }}>
                        <img src={devilApe} alt="AssistandApe" style={{ height: "50vw", maxWidth: "500px", maxHeight: "500px" }} />

                    </div>
                </div> */}
            <center style={{
                borderStyle: "solid"
            }}>
                <div style={{ borderStyle: "solid", width: "100%" }}>
                    <img src={devilApe} alt="AssistandApe" style={{ height: "50vw", maxWidth: "500px", maxHeight: "500px" }} />
                </div>
                <div>
                    <div style={{ float: "left", marginRight: "4%", width: "30%" }}>
                        <Input
                            id="inputForNrOfWantedNfts"
                            style={{ textcolor: "#ffffff" }}
                            min="1"
                            max="5"
                            label="Nr apes"
                            name="inputForNrOfWantedNfts"
                            onBlur={function noRefCheck() { }}
                            onChange={function noRefCheck() { }}
                            type="number"
                            labelBgColor="#ffffff"
                            state="white"
                        />
                        {/* <input className={input123} type="number" id="inputForNrOfWantedNfts" min="1" max="8" defaultValue="1" /> */}
                    </div>
                    <div >
                        <Button
                            id="mint_button"
                            onClick={() => TriggerMint(document.getElementById("inputForNrOfWantedNfts").value)}
                            text="Mint (0.005 eth)"
                            theme="outline"
                            type="button"
                        />
                    </div>
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

            </center>
        </>
    )
}


/*
function mintInput() {
    return (
        <>
            <div style={{ width: "50vw", marginTop: "5%", margin: "auto" }}>
                <Table
                    columnsConfig="80px 0.5fr 0.5fr"
                    customNoDataText="mint interaction"
                    data={
                        [
                            [


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
                                />,
                                
                                <Button
                                    id="mint_button"
                                    onClick={() => TriggerMint(document.getElementById("inputForNrOfWantedNfts").value)}
                                    text="Mint (0.005 eth)"
                                    theme="outline"
                                    type="button"
                                />
                            ]
                        ]}
                    header={[
                        '',
                        <span style={{ marginTop: "20px", color: "242222", fontWeight: "1000" }}>Wallet</span>,
                        <span style={{ marginTop: "20px", color: "242222", fontWeight: "1000" }}>Donated [eth]</span>,
                    ]}
                    maxPages={1}
                    noPagination
                    onPageNumberChanged={function noRefCheck() { }}
                    pageSize={3}
                />
                <div style={{ textAlign: "center", marginTop: "1%" }}>
                    <a href="https://www.savethechildren.org/us/ways-to-help/ways-to-give/ways-to-help/cryptocurrency-donation" target="_blank">**all donations go to savethechildren**</a>
                </div>
            </div>
        </>
    )
}


*/