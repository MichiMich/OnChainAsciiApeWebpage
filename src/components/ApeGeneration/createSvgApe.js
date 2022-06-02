//import svgStart from "../img/SpeekingApes/templates/Start.svg"
//import svgEnd from "../img/SpeekingApes/templates/End.svg"


const svgStart = `<svg width="650" height="700" xmlns="http://www.w3.org/2000/svg"><rect height="700" width="650" fill="black" opacity="0"/>
<text y="31%" fill="`;

const svgMiddle = `" text-anchor="start" font-size="18" xml:space="preserve" font-family="monospace">
<tspan x="4%" dy="1.2em">                    ██████████████
</tspan><tspan x="4%" dy="1.2em">                  ██▓▓▓▓▲▓▓▓▓▓▓▓▲▓████
</tspan><tspan x="4%" dy="1.2em">                ████▓▓▓▓▓▓░░░░▓▓▓▓░░██
</tspan><tspan x="4%" dy="1.2em">              ██▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░██
</tspan><tspan x="4%" dy="1.2em">              ██▓▓▓▓▓▓░░░░░░`;

const svgBetweenEyes = `░░░░░`;

const svgEyesToEnd = `░░░██
</tspan><tspan x="4%" dy="1.2em">              ██▓▓██▓▓░░██░░░░░░░░░░░░░░██
</tspan><tspan x="4%" dy="1.2em">                ██▓▓▓▓██░░░░░░░░░░░░░░░░░░██
</tspan><tspan x="4%" dy="1.2em">    ██████        ██▓▓██░░░░░░░░████░░░░░░██
</tspan><tspan x="4%" dy="1.2em">  ██▓▓▓▓▓▓██        ██░░████████░░░░██████
</tspan><tspan x="4%" dy="1.2em">██▓▓▓▓▓▓▓▓▓▓██      ████░░░░░░░░░░░░░░██      
</tspan><tspan x="4%" dy="1.2em">██▓▓▓▓██▓▓▓▓██    ██▓▓▓▓██████████████        
</tspan><tspan x="4%" dy="1.2em">██▓▓▓▓▓▓██████████▓▓▓▓▓▓▓▓▓▓██▓▓▓▓██        
</tspan><tspan x="4%" dy="1.2em">  ██▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓██▓▓▓▓██▓▓▓▓██    
</tspan><tspan x="4%" dy="1.2em">    ████████████▓▓▓▓▓▓▓▓▓▓██▓▓▓▓██▓▓▓▓██    
</tspan><tspan x="4%" dy="1.2em">              ██████████▓▓██░░░░░░██░░░░██
</tspan><tspan x="4%" dy="1.2em">            ██░░░░░░░░░░██░░░░░░██░░░░██
</tspan><tspan x="4%" dy="1.2em">            ██████████████████████████</tspan>
</text>
<rect height="220" width="650" fill="black" opacity="0"/><text y="2%" fill="white" text-anchor="start" font-size="18" xml:space="preserve" font-family="monospace">
<tspan x="45%" dy="1.2em">   ██████████████████████████████
</tspan><tspan x="45%" dy="1.2em"> ██                              ██
</tspan><tspan x="45%" dy="1.2em">██                                ██
</tspan><tspan x="45%" dy="1.2em">██                                ██
</tspan><tspan x="45%" dy="1.2em">██                                ██
</tspan><tspan x="45%" dy="1.2em"> ██                              ██
</tspan><tspan x="45%" dy="1.2em">   ██████████████████████████████
</tspan><tspan x="45%" dy="1.2em">             ██████     
</tspan><tspan x="45%" dy="1.2em">            ███       
</tspan><tspan x="45%" dy="1.2em">           ██        
</tspan></text>`;

const svgEnd = (`</svg>`);


export function CreateLineSvg(xTranslationPercentage, yTranslationPercentage, TextInput, ColorInput) {
    var createdLine = null;
    // console.log("textInput", typeof (TextInput));
    // console.log("colorInput", typeof (ColorInput));
    //var check does not work, always resultet in zero input
    if (TextInput === "" || TextInput === null || ColorInput === "" || ColorInput === null) {
        console.log("zero input")
        return;
    }
    //ToDo: compare data input if both are string, did not work for now, always returned true here
    // if ((typeof (TextInput) != string)) {
    //     console.log("wrong input data");
    //     return;
    // }
    var start = '<text y="' + yTranslationPercentage + '%" x="' + xTranslationPercentage + '%" fill="';
    var middle = '" text-anchor="start" font-size="18" xml:space="preserve" font-family="monospace">';
    var end = '</text>';
    createdLine = start + ColorInput + middle + TextInput + end;
    // console.log("createdSvgLine", createdLine);
    return (createdLine);
}


export function CreateSVG(createdSvgLine, apeColor, leftEye, rightEye) {

    console.log("apeColor", apeColor)
    // console.log("svg creation called")

    if (svgStart != null && svgEnd != null) {
        // createdSvg = data.concat(data2).concat(data3);
        //createdSvg = data + bubbleTextLine1 + bubbleTextLine2
        if (apeColor === null || apeColor === undefined) {
            //nothing defined, so use black one
            apeColor = 'black';
        }
        if (leftEye === null || leftEye === undefined) {
            leftEye = `◔`;
        }
        if (rightEye === null || rightEye === undefined) {
            rightEye = `◔`;
        }
        var createdSvg = svgStart + apeColor + svgMiddle + leftEye + svgBetweenEyes + rightEye + svgEyesToEnd + createdSvgLine;
        createdSvg += svgEnd;
        //console.log("createdSvg", createdSvg);
        return (createdSvg)
    } else {
        console.log("invalid svg data")
    }


}
