//import svgStart from "../img/SpeekingApes/templates/Start.svg"
//import svgEnd from "../img/SpeekingApes/templates/End.svg"
import { useState } from "react";


const svgStart = (
    `<svg width="650" height="700" xmlns="http://www.w3.org/2000/svg">
<rect height="25" width="138" fill="white" y="31.7%" x="34.5%" opacity="1"/>
<rect height="25" width="197" fill="white" y="34.9%" x="31.5%" opacity="1"/>
<rect height="25" width="217" fill="white" y="38%" x="28.4%" opacity="1"/>
<rect height="25" width="256.2" fill="white" y="41%" x="25.5%" opacity="1"/>
<rect height="25" width="268.2" fill="white" y="44%" x="25.5%" opacity="1"/>
<rect height="22.5" width="276" fill="white" y="47%" x="25.5%" opacity="1"/>
<rect height="22.5" width="274" fill="white" y="50.2%" x="28.3%" opacity="1"/>
<rect height="22.5" width="255" fill="white" y="53%" x="31.3%" opacity="1"/>
<rect height="22.5" width="215" fill="white" y="56%" x="34.5%" opacity="1"/>
<rect height="25" width="196" fill="white" y="59%" x="34.5%" opacity="1"/>

<rect height="24" width="55" fill="white" y="53.2%" x="10.5%" opacity="1"/>
<rect height="24" width="100" fill="white" y="56.2%" x="7%" opacity="1"/>
<rect height="24" width="130" fill="white" y="59.5%" x="4.4%" opacity="1"/>
<rect height="20" width="130" fill="white" y="63%" x="4.4%" opacity="1"/>
<rect height="20" width="196" fill="white" y="63%" x="31.5%" opacity="1"/>

<rect height="20" width="355" fill="white" y="65.8%" x="4%" opacity="1"/>
<rect height="21" width="355" fill="white" y="68.8%" x="7%" opacity="1"/>
<rect height="20" width="350" fill="white" y="72%" x="11%" opacity="1"/>
<rect height="20" width="270" fill="white" y="75%" x="25.5%" opacity="1"/>
<rect height="20" width="270" fill="white" y="78%" x="23%" opacity="1"/>
<rect height="20" width="250" fill="white" y="81%" x="23%" opacity="1"/>
<rect height="15" width="138" fill="white" y="31.5%" x="34.5%" opacity="1"/><text y="31%" fill="black" text-anchor="start" font-size="18" xml:space="preserve" font-family="monospace">
<tspan x="4%" dy="1.2em">                    ██████████████
</tspan><tspan x="4%" dy="1.2em">                  ██▓▓▓▓▲▓▓▓▓▓▓▓▲▓████
</tspan><tspan x="4%" dy="1.2em">                ████▓▓▓▓▓▓░░░░▓▓▓▓░░██
</tspan><tspan x="4%" dy="1.2em">              ██▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░██
</tspan><tspan x="4%" dy="1.2em">              ██▓▓▓▓▓▓░░░░░░◔░░░░░◔░░░██
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
</tspan></text>`);

const svgEnd = (`</svg>`);



const svgNewLineStart = '<tspan x="4%" dy="1.2em"';
const svgNewLineEnd = '</tspan>'

export function CreateLineSvg(xTranslationPercentage, yTranslationPercentage, TextInput, ColorInput) {
    var createdLine = null;
    // console.log("textInput", typeof (TextInput));
    // console.log("colorInput", typeof (ColorInput));
    //var check does not work, always resultet in zero input
    if (TextInput == "" || TextInput == null || ColorInput == "" || ColorInput == null) {
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


export function CreateSVG(createdSvgLine) {

    // console.log("svg creation called")

    console.log("svgstart", svgStart)
    console.log("svgend", svgEnd)

    if (svgStart != null && svgEnd != null) {
        // createdSvg = data.concat(data2).concat(data3);
        //createdSvg = data + bubbleTextLine1 + bubbleTextLine2
        var createdSvg = svgStart + createdSvgLine;
        createdSvg += svgEnd;
        // console.log("createdSvg", createdSvg);
        return (createdSvg)
    } else {
        console.log("invalid svg data")
    }


}
