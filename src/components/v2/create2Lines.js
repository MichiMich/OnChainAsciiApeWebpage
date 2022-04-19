
export function Create2Lines(textData) {

    var s1, s2;
    if (textData == null || textData == undefined) {
        s1 = "no error data given";
    }
    else {
        //make two lines of error message start
        var middle = Math.floor(textData.length / 2);
        var before = textData.lastIndexOf(' ', middle);
        var after = textData.indexOf(' ', middle + 1);

        if (middle - before < after - middle) {
            middle = before;
        } else {
            middle = after;
        }

        s1 = textData.substr(0, middle);
        s2 = textData.substr(middle + 1);
        //make two lines of error message end
    }
    return ([s1, s2]);
}