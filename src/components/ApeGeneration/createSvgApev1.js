import svgStart from "../img/SpeekingApes/templates/Start.svg"
import svgEnd from "../img/SpeekingApes/templates/End.svg"
import { useState, useEffect } from 'react';

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


export function DynCreateSvg(createdSvgLine) {
    const createdSvg = CreateSVG(createdSvgLine);

    useEffect(() => {
        // CreateSVG(createdSvgLine);
        // console.log("side effect runs");
    }, [createdSvgLine])


    // const [createdSvg, startSvgCreation] = useState(CreateSVG(createdSvgLine));

    // useEffect(() => {
    //     function abc() {
    //         startSvgCreation(CreateSVG(createdSvgLine))
    //     }
    //     abc();
    //     return;
    // }, []);
    // console.log("returni", createdSvg);
    // return (createdSvg);

    // var createdSvg = useState(CreateSVG(createdSvgLine));
    // useEffect(() => {
    //     createdSvg = null;
    // })
    // console.log("returni", CreateSVG(createdSvgLine));
    // return (CreateSVG(createdSvgLine));
    // const [createdSvg, createdSvgLine] = useState(CreateSVG(createdSvgLine))



    // console.log("returnValue", createdSvg)
    return (createdSvg);

}

export function CreateSVG(createdSvgLine) {

    const [data, setData] = useState(null);
    const [data3, setData3] = useState(null);

    var createdSvg = null;

    useEffect(() => {
        createdSvg = null;
    });

    fetch(svgStart)
        .then(r => r.text())
        .then(data => {
            // console.log('data', data);
            setData(data);
        });

    fetch(svgEnd)
        .then(r => r.text())
        .then(data3 => {
            // console.log('data3', data3);
            setData3(data3);
        });


    if (data != null && data3 != null) {
        // createdSvg = data.concat(data2).concat(data3);
        //createdSvg = data + bubbleTextLine1 + bubbleTextLine2
        createdSvg = data + createdSvgLine;
        createdSvg += data3;
        // console.log("createdSvg", createdSvg);
        return (createdSvg)
    }


}
