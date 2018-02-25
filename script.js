var a = 2; 
var b = 4;
var value = (a * a) - (2 * a * b) - (b * b);

if (value > 0) {
    console.log('Wynik dodatni: ' + value);
} else {
    console.log('Wynik ujemny: ' + value);
}

if (value == 0) {
    console.log('Wynik równy ' + 0);
} else {
    console.log('Wynik różny od ' + 0);
}