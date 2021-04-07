//Repetição utilizando VAR e LET
function exemplo() {
    console.log(x);
    for (var x = 0; x < 5; x++) {
        console.log(x);
    };
    console.log(x);
};
function exemplo2() {
    //console.log(x); //daria erro
    for (let x = 0; x < 5; x++ ) {
        console.log(x);
    };
    //console.log(x); //daria erro
}
exemplo();
console.log(" ");
exemplo2();