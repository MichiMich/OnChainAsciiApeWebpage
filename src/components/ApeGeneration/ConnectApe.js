//svg dyn creation
import { CreateLineSvg, DynCreateSvg } from "./createSvgApe.js"


export function CreateConnectApe() {

    var line = CreateLineSvg("52", "12", "Please ", "white");
    var line2 = CreateLineSvg("63", "12", "connect", "%23ff33cc");
    var line3 = CreateLineSvg("76", "12", "wallet", "white");
    var line4 = CreateLineSvg("57", "16", "first, my Apefriend!", "white");
    var svg = DynCreateSvg(line + line2 + line3 + line4);
    // console.log("svg", svg);
    return (svg);

}

export function CreateJoinRaffleApe(WalletAddress) {
    console.log("walletinput", WalletAddress)
    if (WalletAddress != null) {
        var walletAddressFormatted = JSON.stringify(WalletAddress).slice(3, 7) + ".." + JSON.stringify(WalletAddress).slice(WalletAddress.length - 3, WalletAddress.length + 1);
        // console.log("walletAddressFormatted", walletAddressFormatted);
    }
    var line = CreateLineSvg("52", "12", "Welcome", "white");
    var line2 = CreateLineSvg("64", "12", walletAddressFormatted, "%23ff33cc"); //# needs to be set as %23 to work with url in calling function, so #ff33cc = %23ff33cc
    var line3 = CreateLineSvg("57", "16", "click me to join raffle", "white");
    var svg = DynCreateSvg(line + line2 + line3);
    // console.log("svg", svg);
    return (svg);

}

export function CreateErrorApe(errorMessage) {
    console.log("errormessage", errorMessage)
    //make two lines of error message start
    var middle = Math.floor(errorMessage.length / 2);
    var before = errorMessage.lastIndexOf(' ', middle);
    var after = errorMessage.indexOf(' ', middle + 1);

    if (middle - before < after - middle) {
        middle = before;
    } else {
        middle = after;
    }

    var s1 = errorMessage.substr(0, middle);
    var s2 = errorMessage.substr(middle + 1);
    //make two lines of error message end


    var line = CreateLineSvg("52", "12", s1, "white");
    var line2 = CreateLineSvg("57", "16", s2, "%23ff33cc");
    var svg = DynCreateSvg(line + line2);
    // console.log("svg", svg);
    return (svg);

}

