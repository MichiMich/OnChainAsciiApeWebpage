
import { CreateConnectApe, CreateJoinRaffleApe, CreateErrorApe, CreateSuccessApe, CreateRejoinApe } from "../ApeGeneration/GenerateApe.js"

const svgCentered = {
    position: "fixed", top: "15%", left: "20%"
}

export function GetCurrentActiveApe_desktop(choosenApe, apeData, width, height) {
    console.log("choosenape", choosenApe)
    console.log("apedatagiven", apeData)
    const windowWidth = 1351; //set to default size, which should fix pretty good otherwise dynamic: window.innerWidth
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


    if (choosenApe == 'connect') {
        return (<>
            <div style={svgCentered}>
                <img src={`data:image/svg+xml;utf8,${CreateConnectApe()}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
            </div>
        </>);
    }
    else if (choosenApe == 'joinRaffle') {
        return (<>
            <div style={svgCentered}>
                <img src={`data:image/svg+xml;utf8,${CreateJoinRaffleApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
            </div>
        </>);
    }
    else if (choosenApe == 'success') {
        return (<>
            <div style={svgCentered}>
                <img src={`data:image/svg+xml;utf8,${CreateSuccessApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
            </div>
        </>);
    }
    else if (choosenApe == 'rejoin') {
        return (<>
            <div style={svgCentered}>
                <img src={`data:image/svg+xml;utf8,${CreateRejoinApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
            </div>
        </>)
    }
    else if (choosenApe == 'error') {
        return (<>
            <div style={svgCentered}>
                <img src={`data:image/svg+xml;utf8,${CreateErrorApe(apeData)}`} style={{ width: windowWidth / 2.5, height: windowWidth / 2.5, opacity: "1" }} />
            </div>
        </>)
    }

}