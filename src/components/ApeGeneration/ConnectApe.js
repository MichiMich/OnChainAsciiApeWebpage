//svg dyn creation
import { CreateLineSvg, CreateSVG } from "../createSvgApe.js"

function CreateConnectApe() {
    var line = CreateLineSvg("my friendo", "green");
    var svg = CreateSVG(line);
    console.log("svgi", svg);
    return (svg);

}

export default CreateConnectApe;