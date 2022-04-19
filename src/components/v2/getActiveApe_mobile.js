import ConnectApePng from "../img/mobile_ApeAssistent/ConnectApe.png";
import SuccessApePng from "../img/mobile_ApeAssistent/SuccessApe.png";
import RejoinApePng from "../img/mobile_ApeAssistent/RejoinApe.png";
import ErrorApePng from "../img/mobile_ApeAssistent/ErrorApe.png";
import SpeechBubblePng from "../img/mobile_ApeAssistent/SpeechBubble.png";
import { Create2Lines } from "./create2Lines.js";

const firstLineSpeechBubble = {
    position: "absolute", top: "17%", left: "40%", color: "white"
}
const secondLineSpeechBubble = {
    position: "absolute", top: "20%", left: "42%", color: "white"
}

export function GetCurrentActiveApe_mobile(choosenApe, apeData, walletAddress, width, height) {
    console.log("choosenape", choosenApe)
    //format wallet address
    if (walletAddress != null && walletAddress != undefined) {
        var walletAddressFormatted = JSON.stringify(walletAddress).slice(3, 7) + ".." + JSON.stringify(walletAddress).slice(walletAddress.length - 3, walletAddress.length + 1);
    }

    if (width != null && width != undefined && height != null && height != undefined) {
        console.log("windowidth", window.innerWidth)
        console.log("width: ", width, "\nheight: ", height);
        if (width > height) {
            console.log("width > height");
        }
        else {
            console.log("height > width");
        }
    }


    //make two lines for error or rejoin
    if (choosenApe == 'error' || choosenApe == 'rejoin') {
        var [s1, s2] = Create2Lines(apeData);
        console.log("created2linse: ", Create2Lines(apeData))
    }


    if (choosenApe == 'connect') {
        return (<>

            <div>
                <img src={SpeechBubblePng} style={{ width: window.innerWidth, height: 200 }} />
                <p style={firstLineSpeechBubble}>Please <span style={{ color: "#ff33cc" }}>connect</span> wallet</p>
                <p style={secondLineSpeechBubble}>first, my Apefriend!</p>
            </div>
            <div>
                <img src={ConnectApePng} style={{ width: window.innerWidth, height: window.innerWidth }} />
            </div>
        </>);
    }
    else if (choosenApe == 'joinRaffle') {
        return (<>

            <div>
                <img src={SpeechBubblePng} style={{ width: window.innerWidth, height: 200 }} />
                <p style={firstLineSpeechBubble}>Welcome <span style={{ color: "#ff33cc" }}>{walletAddressFormatted}</span></p>
                <p style={secondLineSpeechBubble}>click me to join raffle</p>
            </div>
            <div>
                <img src={ConnectApePng} style={{ width: window.innerWidth, height: window.innerWidth }} />
            </div>
        </>);
    }
    else if (choosenApe == 'success') {
        return (<>
            <div>
                <img src={SpeechBubblePng} style={{ width: window.innerWidth, height: 200 }} />
                <p style={firstLineSpeechBubble}>Yipii you joined!</p>
                <p style={secondLineSpeechBubble}><span style={{ color: "#ff33cc" }}>Thanks a lot, I hope you win</span></p>
            </div>
            <div>
                <img src={SuccessApePng} style={{ width: window.innerWidth, height: window.innerWidth }} />
            </div>
        </>);
    }
    else if (choosenApe == 'rejoin') {
        return (<>
            <div>
                <img src={SpeechBubblePng} style={{ width: window.innerWidth, height: 200 }} />
                <p style={firstLineSpeechBubble}>{s1}</p>
                <p style={secondLineSpeechBubble}><span style={{ color: "#ff33cc" }}>{s2}</span></p>
            </div>
            <div>
                <img src={RejoinApePng} style={{ width: window.innerWidth, height: window.innerWidth }} />
            </div>
        </>);
    }
    else if (choosenApe == 'error') {
        return (<>
            <div>
                <img src={SpeechBubblePng} style={{ width: window.innerWidth, height: 200 }} />
                <p style={firstLineSpeechBubble}>{s1}</p>
                <p style={secondLineSpeechBubble}>{s2}</p>
            </div>
            <div>
                <img src={ErrorApePng} style={{ width: window.innerWidth, height: window.innerWidth }} />
            </div>
        </>);
    }

}