function Flippedwords(input) {
    var words = input.split(" ");
    var reversedWords = words.map(function(word) {
        return word.split("").reverse().join("");
    });
    var answoerd = reversedWords.join(' ');
    console.log(answoerd);
}
var Wordstring = "Hola soy una cadena"
Flippedwords(Wordstring);
Flippedwords('Programando ando');
Flippedwords('Concatenación');
