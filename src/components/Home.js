import { Button, Input } from "web3uikit";
import devilApe2 from "./img/transparent/devilApe2Transp.png"
import { AnimatedBackground } from "./animatedBackground.js";
import "./css/colorBackground.css"
import "./css/animatedBackground.css"
import { HandleMoralisWeb3, TriggerMint } from "./InteractWithMintContract.js";
import { ShowTop3Donators } from "./top3Donators.js";
import { projectInformations } from "./projectInformation.js";
import { HandleDonation } from "./donate.js";
import { NotificationFromWeb3UiKit } from "./notification";

//todo: define correct nft cost at .env file -> 0.005 eth
export function Home() {

    return (
        <>
            {/* moralis functions */}
            <HandleMoralisWeb3 />


            {/* 
            <AnimatedBackground /> */}
            {mintInput()}
            <ShowTop3Donators />
            <HandleDonation />
            {projectInformations()}
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
            {NotificationFromWeb3UiKit()}


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
                marginTop: "2%", marginLeft: "2%", marginRight: "2%", position: "relative"
            }}>
                <div style={{ width: "100%" }}>
                    <img src={devilApe2} alt="AssistandApe" style={{ height: "50vw", maxWidth: "500px", maxHeight: "500px" }} />
                </div>

                <h1 style={{ color: "white" }}>Mint here</h1>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '10px',
                        maxWidth: '700px'
                    }}
                >

                    <div style={{ float: "left", marginRight: "2%", width: "200px", backgroundColor: "white", borderRadius: "20px", borderStyle: "solid" }}>
                        <Input
                            id="inputForNrOfWantedNfts"
                            min="1"
                            max="5"
                            label="Nr apes"
                            name="inputForNrOfWantedNfts"
                            onBlur={function noRefCheck() { }}
                            onChange={function noRefCheck() { }}
                            type="number"
                            labelBgColor="#ffffff"
                        />
                    </div>
                    {/* <input className={input123} type="number" id="inputForNrOfWantedNfts" min="1" max="8" defaultValue="1" /> */}
                    <div>
                        <Button
                            id="mint_button"
                            onClick={() => TriggerMint(document.getElementById("inputForNrOfWantedNfts").value)}
                            text="Mint (0.005 eth)"
                            theme="outline"
                            type="button"
                        />
                    </div>
                </div>
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