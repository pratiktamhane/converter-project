function convert() {
    var rem, binary = 0, i = 1;
    var deci = Number(document.getElementById("number1").value);
    while (deci > 0) {
        rem = deci % 2;
        deci = parseInt(deci / 2);
        binary = binary + (i * rem);
        i = i * 10;
    }
    document.getElementById("binary").value = binary;

    deciToOctal();
    deciToHexa();
}
function deciToOctal() {
    var decOc = Number(document.getElementById("number1").value);

    var octal = decOc.toString(8);
    document.getElementById("octal").value = octal;
}

function deciToHexa() {

    var decHx = Number(document.getElementById("number1").value);

    var hexa = decHx.toString(16);
    document.getElementById("Hexa").value = hexa;
}